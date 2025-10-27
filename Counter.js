"use client";

import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const reset = () => setCount(initialCount);

  const canDecrement = count - step >= 0;

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) setStep(value);
  };

  return (
    <div className="card">
      <p className="count-display" aria-live="polite">
        Current Count: {count}
      </p>

      <div className="button-row">
        <button onClick={increment} className="btn" type="button">
          + {step}
        </button>

        <button
          onClick={decrement}
          disabled={!canDecrement}
          className="btn"
          type="button"
        >
          - {step}
        </button>

        <button onClick={reset} className="btn" type="button">
          Reset
        </button>
      </div>

      <div className="step-input">
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
          />
        </label>
      </div>
    </div>
  );
}
