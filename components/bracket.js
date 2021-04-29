/*
 Calling Tournament().addBracket(args) on an existing tournament pushes a newly created bracket object into that tournament
 Args:
 name, desc - String, passed into Tournament().addBracket()
 game - string, handled automatically by Tournament().addBracket()
 EID, TID, BID - numbers, handled automatically by Tournament().addBracket()
 dates - Date() ---- TODO

Functions:
addCohost(User()) - pushes an existing user to list of cohosts
addPlayer(User()) - pushes an existing user to list of players
addBracket(args) - pushes a new Bracket() to list of brackets
 */

export class Bracket {
    constructor(name, desc, game, EID, TID, BID) {
        this.name = name;
        this.desc = desc;
        this.game = game;
        this.EID = EID;
        this.TID = TID;
        this.BID = BID
        this.players = [];
        this.cohosts = [];
    }

    addCohost(cohost) {
        this.cohosts.push(cohost);
    }

    addPlayer(player) {
        this.players.push(player);
    }
}

/* TODO
export class BracketButton extends Component {
    static propTypes = {
    }

    render() {
        return ()
    }
}
*/