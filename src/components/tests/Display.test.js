import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Display from '../Display';
import userEvent from '@testing-library/user-event';

const testShow = {
    name:'',
    summary:'',
    seasons:[{
        id:'0',
        name:'season1',
        episodes:[]
    }],
    
}

test('renders without errors', ()=> {
    render(<Display/>)
})

test('show component will display', ()=> {
    render(<Display/>)
    const beenza = screen.getByRole('button');
    userEvent.click(beenza);
    const beenza2 = screen.queryByTestId('show-container');
    waitFor(() => expect(beenza2).toBeInTheDocument());
})

test('options rendered', ()=> {
    render(<Display show={testShow}/>)
    const beenza = screen.getByRole('button');
    userEvent.click(beenza);
    const beenza2 = screen.queryAllByTestId('season-option')
    waitFor(() => expect(beenza2).toHaveLength(1));
})

test('Fetch Button Call', ()=> {
    
    const beenza = jest.fn();
    render(<Display show={testShow} handleClick={beenza}/>)
    const superduperbeenzaballermachineagario = screen.getByRole('button');
    userEvent.click(superduperbeenzaballermachineagario);
    waitFor(() => expect(beenza).toBeCalled());
})







///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.