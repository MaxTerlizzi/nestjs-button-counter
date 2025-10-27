"use client"; 

import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const reset = () => setCount(initialCount);

   // inline styles
  const cardStyle = {
  margin: "1rem 0",
  padding: "1.5rem",
  border: "1px solid #ddd",
  borderRadius: "12px",
  background: "#EFFBEB",
  maxWidth: "700px",
  color: "#2A3426", // <-- makes text dark
};

  const buttonsRow = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "0.75rem",
  };

  const btnBase = {
  padding: "6px 10px",
  borderRadius: "6px",
  border: "1px solid #333",
  background: "#7E9E73",
  color: "#000",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
};

  const btnDisabled = {
  ...btnBase,
  opacity: 0.5,
  cursor: "not-allowed",
};


  const inputStyle = {
  marginLeft: "0.5rem",
  padding: "6px",
  width: "70px",
  borderRadius: "6px",
  border: "1px solid #7E9E73",
  color: "#000",
  background: "#fff",
};

  // Prevent negative counts
  const canDecrement = count - step >= 0;

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setStep(value);
    }
  };
  

   return (
    <div style={cardStyle}>
      <p style={{ margin: "0 0 0.75rem 0", fontWeight: 600 }} aria-live="polite">
        Current Count: {count}
      </p>

      <div style={buttonsRow}>
        <button
          onClick={increment}
          style={btnBase}
          aria-label={`Add ${step}`}
          type="button"
        >
          + {step}
        </button>

        <button
          onClick={decrement}
          disabled={!canDecrement}
          style={canDecrement ? btnBase : btnDisabled}
          aria-label={`Subtract ${step}`}
          type="button"
        >
          - {step}
        </button>

        <button onClick={reset} style={btnBase} type="button" aria-label="Reset counter">
          Reset
        </button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>
    </div>
  );
}


