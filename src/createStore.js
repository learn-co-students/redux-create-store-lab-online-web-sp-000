import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    // render()
  }

  function getState() {
    dispatch({ type: '@@INIT' })
    return state;
  }

  return {
    dispatch,
    getState
  }
}

// const candyStore = createStore(candyReducer)
// const countStore = createStore(countReducer)

// candyStore.dispatch({ type: '@@INIT' })
// countStore.dispatch({ type: '@@INIT' })

function render() {
  const container = document.getElementById('container');
}
