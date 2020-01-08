// import candyReducer from './reducers/candyReducer.js'
import countReducer from './reducers/countReducer.js'


export default function createStore(reducer) {
  let state 

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  dispatch({type:"@@INIT"})

  function getState(){
    return state;
  }

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
  const container = document.getElementById('container');
}

let count = createStore(countReducer);
