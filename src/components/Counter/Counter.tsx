import React, { useState, type FC } from 'react';
import './counter.scss';

type Props = {};

enum Direction {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export const Counter: FC<Props> = () => {
  const [count, setCount] = useState<number>(0);

  const changeCount = (direction: Direction) =>
    setCount((prevCount) => (direction === Direction.INCREMENT ? prevCount + 1 : prevCount - 1));

  return (
    <section className="counter">
      <h3>Tested Counter</h3>

      <div className="button-box">
        <button className="button" onClick={() => changeCount(Direction.DECREMENT)} type="button">
          -
        </button>
        <span className="span" data-testid="current-count">
          {count}
        </span>
        <button className="button" onClick={() => changeCount(Direction.INCREMENT)} type="button">
          +
        </button>
      </div>
    </section>
  );
};
