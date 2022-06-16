// Action
const actionMaker = {
  type: "ADD_COUNT",
  payload: 1,
};

//InitState
const initState = { count: 0 };

//Reducer
const reducer = (store1, actionMaker) => {
  switch (action.type) {
    case "ADD_COUNT": {
      return {
        ...state,
        count: store1.count + action.payload,
      };
    }
    default: {
      return store1;
    }
  }
};

//Store
class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }

  getState() {
    return this.state;
  }
}

const store1 = new Store(initState, reducer);

console.log(store1.getState());


export default introJs;