// write your createStore function here
//By the end of this lab, you should be able to open index.html, use your store's dispatch function to add a name of a type of candy, and see that name appear on the page.


function createStore() {

  let state;

  function dispatch(action) { //take an action, update state using reducer, call render function
      state = candyReducer(state, action)
      render()
  }

  function getState() { //returns current state 
      return state
  }

  return {
      dispatch,
      getState
  }
}

//state = basic array of strings
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
let store = createStore();
store.dispatch({ type: '@@INIT' });

let button = document.getElementById('button');
button.addEventListener('click', () => {
  store.dispatch({ type: 'ADD_CANDY' });
})