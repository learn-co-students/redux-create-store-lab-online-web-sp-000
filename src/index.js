// write your createStore function here

function createStore(candyReducer){
  let state;

  function dispatch(action) {            // updates and creates new state
    state = candyReducer(state, action);   // ----> OVDJE SE REDUCER POKRECE i returna i sejva novo state u state
    render();                         // ----> spaja sa HTML,mjenja text HTMLa
  }

  function getState() {              // returns current state
    return state;
  };

  return {
    dispatch,
    getState
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

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch


let store = createStore(candyReducer) // createStore takes the reducer as an argument


store.dispatch({ type: '@@INIT' });
