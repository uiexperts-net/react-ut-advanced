import React from 'react'
// import { http, HttpResponse, delay } from 'msw'
// import { setupServer } from 'msw/node'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { Counter } from '@/app/components/counter/Counter'
import { renderWithProviders } from '../app/components/ProviderUtil'
import { makeStore } from '@/lib/store'
import { CounterSliceState, increment, incrementAsync, incrementByAmount, selectCount } from '@/lib/features/counter/counterSlice'


test.skip('Uses preloaded state to render', () => {
  const initialTodos = [{ id: 5, text: 'Buy Milk', completed: false }]

  const { getByTestId,store } = renderWithProviders(<Counter />, {
    preloadedState: {
      value: 10,
      status: 'active'

    } as any
  })
  store.dispatch(increment())
  // fireEvent.click(screen.getByTestId('#plus'))
  expect(getByTestId('#val')).toHaveTextContent('1');

})


test('Sets up initial state state with actions', () => {
  const appStore = makeStore()
  
  const {getState,dispatch} = appStore;
  // store.dispatch(incrementByAmount(10))
  // const { getByTestId,store } = renderWithProviders(<Counter />)
  appStore.dispatch(increment());
  // store.dispatch(increment());
  appStore.dispatch(incrementByAmount(11));
  // appStore.dispatch(incrementAsync(12));

  // const {value} = getState();
  const cnt = selectCount(getState());
  console.log('value:::',cnt);
  
  // expect(getByTestId('#val')).toHaveTextContent('10');
})

test.skip('fetches & receives a user after clicking the fetch user button', async () => {
  renderWithProviders(<Counter />)
  expect(2).toBe(2);
  expect(screen.getByTestId('#val')).toHaveTextContent('0');
  fireEvent.click(screen.getByTestId('#plus'))
  fireEvent.click(screen.getByTestId('#plus'))
  expect(screen.getByTestId('#val')).toHaveTextContent('2');
  expect(increment).toHaveBeenCalledTimes(1)
  
  /*
    // should show no user initially, and not be fetching a user
    expect(screen.getByText(/no user/i)).toBeInTheDocument()
    expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
  
    // after clicking the 'Fetch user' button, it should now show that it is fetching the user
    fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
    expect(screen.getByText(/no user/i)).toBeInTheDocument()
  
    // after some time, the user should be received
    expect(await screen.findByText(/John Smith/i)).toBeInTheDocument()
    expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
    */
})