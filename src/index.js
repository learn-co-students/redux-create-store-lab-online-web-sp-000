function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  return{
    getState,
    dispatch
  };
}

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

let store = createStore(candyReducer)
store.dispatch({ type: '@@INIT'});



// 1. Notice that in the provided `render` function, a variable named `store` is
//    called. Define a variable named `store` and assign it to whatever is returned
//    by the `createStore` function you've written when it is passed
//    the `candyReducer` function.
// 2. Initialize your state using a `dispatch` call to the reducer.