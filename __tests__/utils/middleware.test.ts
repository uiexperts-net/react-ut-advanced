
// import { configureStore } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';


// import rootReducer from './rootReducer';


// export default store;
//@ts-ignore
const loggerMiddleware = store => next => action => {
    console.log('dispatching', action);
    return next(action);
  };


const mockStore = configureMockStore([loggerMiddleware]);

//   import configureMockStore from 'redux-mock-store';
// import loggerMiddleware from './loggerMiddleware';

// const mockStore = configureMockStore([loggerMiddleware]);

describe('loggerMiddleware', () => {
  let store:any;
  let dispatch:any;

  beforeEach(() => {
    store = mockStore({});
    dispatch = store.dispatch;
  });

  it('should log dispatched action', () => {
    const action = { type: 'TEST_ACTION' };
    dispatch(action);
    const expectedActions = [{ type: 'TEST_ACTION' }];
    expect(store.getActions()).toEqual(expectedActions);
  });
});