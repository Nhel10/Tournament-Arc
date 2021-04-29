import { Bracket } from './bracket';

/*
 Calling Event().addTournament(args) on an existing event pushes a newly created tournament object into that event
 Args:
 name, desc, game - String, passed into Event().addTournament()
 EID, TID - numbers, handled automatically by Event().addTournament()
 dates - Date() ---- TODO

Functions:
addCohost(User()) - pushes an existing user to list of cohosts
addPlayer(User()) - pushes an existing user to list of players
addBracket(args) - pushes a new Bracket() to list of brackets
 */
export class Tournament {
    constructor(name, desc, game, EID, TID) {
        this.name = name;
        this.desc = desc;
        this.game = game;
        this.EID = EID;
        this.TID = TID;
        this.brackets = [];
        this.players = [];
        this.cohosts = [];
    }

    addCohost(cohost) {
        this.cohosts.push(cohost);
    }

    addPlayer(player) {
        this.players.push(player);
    }

    addBracket(name, desc) {
        this.brackets.push(new Bracket(name, desc, this.game, this.EID, this.TID, this.brackets.size));
    }
}

/* TODO
export class TournamentButton extends Component {
    static propTypes = {
    }

    render() {
        return ()
    }
}
*/