import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Counter';

afterEach(cleanup);
describe(`<Counter />`, () => {
  it(`should have a describing header`, async () => {
    render(<Counter />);
    const header = await screen.findByRole(`heading`, { level: 3 });
    expect(header.textContent).toBe(`Tested Counter`);
  });
  it(`should increment when the '+' button is pressed`, async () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = await screen.findByText(`+`);
    expect(getByTestId(`current-count`).textContent).toBe(`0`);
    userEvent.click(incrementButton);
    expect(getByTestId(`current-count`).textContent).toBe(`1`);
  });

  it(`should decrement when the '-' button is pressed`, async () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = await screen.findByText(`-`);
    expect(getByTestId(`current-count`).textContent).toBe(`0`);
    userEvent.click(decrementButton);
    expect(getByTestId(`current-count`).textContent).toBe(`-1`);
  });
});
