function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  return {
    dispatch,
    getState
  }
}

let store = createStore(candyReducer)
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

store.dispatch({type: '@@INIT'})