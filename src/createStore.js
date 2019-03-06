import candyReducer from './reducers/candyReducer';

export default function createStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  dispatch({ type: '@@INIT' })

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}

// let candyStore = createStore(candyReducer);
// candyStore.dispatch({ type: '@@INIT' });
