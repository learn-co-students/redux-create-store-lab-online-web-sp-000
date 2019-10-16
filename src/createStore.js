import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer) {
  let state

  function dispatch(action){
    state = reducer(state, action)
    //render()
  }

  function getState() {
    return state
  }

  return {dispatch, getState}
}

function render() {
  const container = document.getElementById('container');
}

let candyStore = createStore(candyReducer)
//candyStore.dispatch({type: "@@INIT"})
//
let countStore = createStore(countReducer)
//countStore.dispatch({type: '@@INIT'})
