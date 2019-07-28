class Player {
    constructor(name){
        this.name = name;
        this.goalsScored = 0;
        this.chances = 10;
    }

    hit(){
        if(this.chances === 0){
            return console.log("Game is over");
        }
        this.goalsScored++;
        this.chances--;
    }

    miss(){
        if(this.chances === 0){
            return console.log("Game is over");
        }
        this.chances--;
    }
}
