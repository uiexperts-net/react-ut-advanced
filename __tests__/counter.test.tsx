import React from 'react'
import { Counter } from '@/app/components/counter/Counter'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../app/components/ProviderUtil'


describe('Validation of Redux features with React Application', () => {

  test('validate increment counter with onClick event', () => {
    const { getByRole, getByTestId } = renderWithProviders(<Counter />);
    const displayCounter = getByRole('display-counter');
    const incrTxtElem = getByTestId('incr-value')

    // INITIAL DISPLAY = 0
    expect(displayCounter).toHaveTextContent('0');

    // INCREMENT VALUE TO 1
    fireEvent.click(getByTestId('#plus'));
    expect(displayCounter).toHaveTextContent('1');

    // DECREMENT VALUE TO 0
    fireEvent.click(getByTestId('#minus'));
    expect(displayCounter).toHaveTextContent('0');

    // INCREMENT VALUE TO 10
    fireEvent.change(incrTxtElem, { target: { value: '10' } });
    fireEvent.click(getByTestId('#incr-amt'));
    expect(displayCounter).toHaveTextContent('10');
  })

})