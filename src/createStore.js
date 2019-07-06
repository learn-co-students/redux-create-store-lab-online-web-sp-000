
export default function createStore(reducer) {
  //dispatch needs access to state, so we define it here
  let state

  //dispatch takes an action and updates/renders the state
  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState(){
    return state
  }

  //dispatch an action of type: @@INIT to find our reducers and the initial state we set within them, in this case a number and an empty array
  dispatch({type: '@@INIT'})


  // createStore returns a POJO that has access to the dispatch method (which updates/renders state, and getState which it needs to first access the state)
  return {
    dispatch,
    getState
  }
}


function render() {
  const container = document.getElementById('container');

}
