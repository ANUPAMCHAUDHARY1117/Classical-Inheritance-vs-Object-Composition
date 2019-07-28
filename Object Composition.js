const onHit = (state) => ({
    hit :  () => {
        if(state.chances === 0){
            return console.log("Game is over");
        }
        state.chances -= 1;
        state.goalsScored += 1;
    }
});

const onMiss = (state) => ({
    miss : () => {
        if(state.chances === 0){
            return console.log("Game is over");
        }
        state.chances -= 1;
    }
});

const player = (name) => {
    let state = {
        name,
        chances : 10,
        goalsScored : 0
    }
    return Object.assign(state,onHit(state), onMiss(state))
}
