import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Counter';

describe(`<Counter />`, () => {
  afterEach(cleanup);
  it(`should have a describing header`, async () => {
    render(<Counter />);
    const header = await screen.findByRole(`heading`, { level: 3 });
    expect(header.textContent).toBe(`Tested Counter`);
  });

  it(`should increment when the '+' button is pressed`, async () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = screen.getByText(`+`);
    expect(getByTestId(`current-count`).textContent).toBe(`0`);
    await userEvent.click(incrementButton);
    expect(getByTestId(`current-count`).textContent).toBe(`1`);
  });

  it(`should decrement when the '-' button is pressed`, async () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = screen.getByText(`-`);
    expect(getByTestId(`current-count`).textContent).toBe(`0`);
    await userEvent.click(decrementButton);
    expect(getByTestId(`current-count`).textContent).toBe(`-1`);
  });
});
