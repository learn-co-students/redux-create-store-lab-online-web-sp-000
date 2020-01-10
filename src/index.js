// write your createStore function here
let candy = ['reeces', 'puffs']

function createStore(candy) {
  let state

  let dispatch = (action = { type: 'ADD_CANDY', candy: candy}) => {
    state = candyReducer(state, action)
    render()
  }

  let getState = () => { return state }

  return {
    dispatch,
    getState
  }

}

let store = createStore()
store.dispatch()

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}


function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};
 store.dispatch({ type: 'ADD_CANDY', candy: candy[0]})
 store.dispatch({ type: 'ADD_CANDY', candy: candy[1]})
// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch
