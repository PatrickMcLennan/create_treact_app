import React, { useState, useCallback, FC } from 'react';
import './counter.scss';

enum Direction {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  const clickCallback = useCallback((e): void => {
    const newDirection = e?.target?.getAttribute?.(`data-direction`);
    if (!newDirection) return;
    else
      return setCount((prevCount) =>
        newDirection === Direction.INCREMENT ? prevCount + 1 : prevCount - 1
      );
  }, []);

  return (
    <section className="counter">
      <h3>Tested Counter</h3>

      <div className="button-box">
        <button
          className="button"
          data-direction={Direction.DECREMENT}
          onClick={clickCallback}
          type="button"
        >
          -
        </button>
        <span className="span" data-testid="current-count">
          {count}
        </span>
        <button
          className="button"
          data-direction={Direction.INCREMENT}
          onClick={clickCallback}
          type="button"
        >
          +
        </button>
      </div>
    </section>
  );
};
