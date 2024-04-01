import { counterReducer, increment, decrement, CounterSliceState, selectCount } from '@/lib/features/counter/counterSlice';
import { makeStore } from '@/lib/store'

describe('counter actions', () => {
  let store: any;

  beforeEach(() => {
    store = makeStore();
  });

  test('should create an action to increment', () => {
    const expectedAction = {
      type: increment.type,
    };
    expect(increment()).toEqual(expectedAction);
  });

  test('should create an action to decrement', () => {
    const expectedAction = {
      type: decrement.type,
    };
    expect(decrement()).toEqual(expectedAction);
  });

  test('validate selector for the counter value', () => {
    const state = {
      counter: {
        value: 5,
        status: 'loading'
      } as CounterSliceState
    }

    expect(selectCount(state)).toEqual(5);
  });

  test('validate counter reducer', () => {
    const previousState =
      {
        value: 5,
        status: 'loading'
      } as CounterSliceState

    expect(counterReducer(previousState, increment())).toEqual({
      value: 6,
      status: 'loading'
    })

    expect(counterReducer(previousState, decrement())).toEqual({
      value: 4,
      status: 'loading'
    })

  })

  it('should log dispatched action', () => {
    const { getState, dispatch } = store;
    dispatch(increment());
    const { counter: { value } } = getState();
    expect(value).toBe(1);
  });

});




