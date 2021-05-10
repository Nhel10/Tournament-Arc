import {match} from './match';
export class Round {
    constructor(){
        this.participants = [];
        this.winnerList = [];
        this.matchList = [];
        this.complete = false;
    }

    addParticipants(player){
        this.participants.push(player);
    }

    addWinner(player){
        this.winnerList.push(player);
    }

    addMatch(match){
        this.matchList.push(match);
    }

    // Gets the players from the participants and put them in matches based on pairs of 2 
    formatMatchList(){
        var i = 0;
        for(i = 0; i < this.participants.length; i++){
            if((i % 2) == 1){
                this.matchList.push(new match(this.participants[i-1], this.participants[i]));
            }
        }
    }

    getComplete(){
        return this.complete;
    }

    getWinnerList(){
        return this.winnerList;
    }

    // Functions checks if the round is complete if the winnerList is half the size of the participants list size 
    isComplete(){
        var participantsList = this.participants.length;
        var winnerlength = this.matchList.length;
        if ((participantsList/winnerlength) == 2){
            return true;
        } else {
            return false;
        }
    }


    }

    








