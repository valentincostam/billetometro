import React from "react";
import "./BillList.css";

function BillList({ bills, onChange }) {
  return (
    <ul className="bill-list">
      {bills.map(({ checked, denomination, count }) => (
        <li
          className={`bill-list__item ${
            checked ? "" : "bill-list__item--disabled"
          }`}
          key={denomination}
        >
          <label className="bill-list__label" htmlFor={denomination}>
            <div
              className={`bill-list__bill bill-list__bill--${denomination}`}
            ></div>
            <span
              className={`bill-list__count ${
                count > 0 ? "" : "bill-list__count--zero"
              }`}
            >
              × {count}
            </span>
            <input
              type="checkbox"
              className="bill-list__checkbox"
              id={denomination}
              checked={checked}
              onChange={(event) => onChange(event, denomination)}
            />
          </label>
        </li>
      ))}
    </ul>
  );
}

export default BillList;
