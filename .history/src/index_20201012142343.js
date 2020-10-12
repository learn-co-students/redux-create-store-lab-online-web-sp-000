// write your createStore function here


function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}






function createStore(reducer) {
  let state

  function dispatch(action){
    state = candyReducer(state, action);
    render()
  }

  function getState() {
    // console.log(store);
    return store.state
  }

  return {
    dispatch, 
    getState 
  }
  
}


// use your createStore function and the functions provided here to create a store
let store = createStore(candyReducer)
// once the store is created, call an initial dispatch
store.dispatch({type: '@@INIT'})

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};