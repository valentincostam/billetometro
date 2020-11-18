import React from "react";
import "./BillStack.css";

const BILL_THICKNESS = 0.17; // Pixels.

function BillStack({ bills, onLend }) {
  const totalBillCount = bills
    .map((bill) => bill.count)
    .reduce((acc, val) => acc + val);

  const maxCheckedDenomination = bills
    .filter((bill) => bill.checked && bill.count)
    .map((bill) => bill.denomination)
    .reduce((a, b) => Math.max(a, b), 0);

  let stackHeight = totalBillCount * BILL_THICKNESS;

  if (stackHeight > 60000000) {
    stackHeight = 60000000;
  }

  if (stackHeight > 0) {
    return (
      <div className="bill-stack">
        <div
          className={`prism prism--${maxCheckedDenomination}`}
          style={{
            "--height": `${stackHeight}px`,
          }}
        >
          <div className="prism__face prism__face--front"></div>
          <div className="prism__face prism__face--left"></div>
          <div className="prism__face prism__face--right"></div>
          {/* <div className="prism__face prism__face--bottom"></div> */}
          <div className="prism__face prism__face--top"></div>
          <div className="prism__face prism__face--back"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bill-stack bill-stack--empty">
        <p className="bill-stack__message">¡¿No tenés ni $10?!</p>
        <p className="bill-stack__message bill-stack__message--small">
          <span
            className="bill-stack__link"
            onClick={(event) => onLend(event, 50)}
          >
            Te presto $50
          </span>{" "}
          y después{" "}
          <a
            className="bill-stack__link"
            href="https://cafecito.app/valentincostam"
          >
            me invitás un café
          </a>
          .
        </p>
      </div>
    );
  }
}

export default BillStack;
