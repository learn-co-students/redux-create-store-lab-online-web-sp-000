// import candyReducer from '../src/reducers/candyReducer';
// import countReducer from '../src/reducers/countReducer';

export default function createStore(reducer) {
  let state;

  function dispatch (action) {
    state = reducer(state, action);
    render();
  };

  function getState () {
    return state
  }

  return { getState,
    dispatch
  };
};

function render() {
  const container = document.getElementById('container');
}

let store = createStore(reducer);


// candyStore.dispatch ({ type: '@@INIT'})
// countStore.dispatch ({ type: '@@INIT'})

store.dispatch ({ type: "@@INIT"})
