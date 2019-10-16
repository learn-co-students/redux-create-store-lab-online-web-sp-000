import createStore  from '../src/createStore';
import candyReducer from '../src/reducers/candyReducer';
import countReducer from '../src/reducers/countReducer';
import jsdom from 'jsdom';
import sinon from 'sinon';

describe('createStore', function() {
  let candyStore, countStore;

  beforeEach(function(){
    global.document = jsdom.jsdom('<html><body><div id="container"></div></body></html>');
    candyStore = createStore(candyReducer);
    countStore = createStore(countReducer);
  })

  it('returns an object', function() {
    expect(candyStore).toBeA(Object)
  })

  
})
