import React from "react";
import "./AmountInput.css";

function AmountInput({ value, onChange }) {
  return (
    <div className="amount-input">
      <div className="amount-input__inner">
        <label htmlFor="amount" className="amount-input__label">
          ARS
        </label>
        <input
          id="amount"
          className="amount-input__input"
          type="number"
          step="10"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default AmountInput;
