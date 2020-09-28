// write your createStore function here

function createStore(candyReducer){
  let state;

  function dispatch(action){
    state = candyReducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  return { dispatch, getState };
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

let store = createStore(candyReducer);

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

store.dispatch({type: '@@INIT'})

store.dispatch({type: 'ADD_CANDY', candy: "Twixx"})
store.dispatch({type: 'ADD_CANDY', candy: "KitKat"})

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch