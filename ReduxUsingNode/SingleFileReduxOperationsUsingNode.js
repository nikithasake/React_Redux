
const redux=require("redux");

const createStore=redux.createStore


const BUY_PALKOVA='PALKOVA';
function buypalkova(){
    return {
        type:BUY_PALKOVA,
        info:"Most popular sweet"
    }
}

const initialState={
    initialvalue:10
}

function reducer(state=initialState,action){
    switch(action.type){
        case BUY_PALKOVA:
            return {
            ...state,
            initialvalue:state.initialvalue-1,
            information:action.info
        }
        default: 
        console.log("prashu is in confusion");
        return state;
    }
}

const store=createStore(reducer);
console.log("Initial State",store.getState());
const unsubscribe=store.subscribe(()=>console.log("Updated State",store.getState()));
store.dispatch(buypalkova());
store.dispatch(buypalkova());
store.dispatch(buypalkova());
unsubscribe();