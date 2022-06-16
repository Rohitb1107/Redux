// Action
const actionMaker = {
  type: "ADD_COUNT",
  payload: 1,
};

//InitState
const initState = { count: 0 };

//Store
class Store {
  constructor(initState, reducer) {
    (this.state = initState), (this.reducer = reducer);
  }

  getState() {
    return this.state;
  }
}
