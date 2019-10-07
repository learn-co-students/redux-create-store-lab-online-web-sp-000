export default function createStore(reducer) {
  // add your code here
  let state;

  //dispatch should take in an action, update the state using the reducer, and call the render function.
  function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  //getState should return the current state
  function getState() {
    return state;
  };

  dispatch({ type: '@@INIT' });

  //return an object with two methods - getState, dispatch
  return {
    dispatch,
    getState
  };
};

function render() {
  const container = document.getElementById('container');
}
