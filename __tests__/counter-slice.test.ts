import  {counterReducer, increment,decrement, CounterSliceState, selectCount} from '@/lib/features/counter/counterSlice';

// test('should handle a todo being added to an empty list', () => {
//     const previousState:CounterSliceState ={
//         value: 0,
//         status: "idle",
//       };
  
//     expect(counterReducer(previousState, increment())).toEqual({value:1,status:'idle'})
//     expect(counterReducer(previousState, increment())).toEqual({value:2,status:'idle'})
//   })

//   import counterReducer, { increment, decrement } from './counterSlice';

describe('counter actions', () => {
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

  test('should select the counter value', () => {
    const state = {
       counter:{
        value: 5,
        status:'loading'
       } as CounterSliceState
      }
    
    expect(selectCount(state)).toEqual(5);
  });

});




