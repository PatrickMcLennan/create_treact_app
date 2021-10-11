import React, { FC } from 'react';
import { Counter } from './components/Counter/Counter';
import wahoo from './public/wahoo.jpeg';

export const App: FC = () => {
  return (
    <main className="main">
      <img src={wahoo} alt="Success!" title="Success!" />
      <h1 className="h1">Hello World!</h1>
      <p className="p">
        This app should be ready to go! Edit a file within <code>src</code> to get started :)
      </p>
      <Counter />
    </main>
  );
};
