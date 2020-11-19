import React from "react";
import "./BillStack.css";

const BILL_THICKNESS = 0.17; // Pixels.

function BillStack({ bills, onLend }) {
  const isAnyBillChecked = bills.some(({ checked }) => checked);

  if (!isAnyBillChecked)
    return (
      <div className="bill-stack bill-stack--empty">
        <p className="bill-stack__message">¿No te gusta el efectivo?</p>
        <p className="bill-stack__message bill-stack__message--small">
          <a
            className="bill-stack__link"
            href="https://twitter.com/valentincostam"
          >
            Seamos amigos.
          </a>
        </p>
      </div>
    );

  const totalBillCount = bills
    .map(({ count }) => count)
    .reduce((acc, val) => acc + val);

  if (totalBillCount === 0) {
    const minCheckedDenomination = bills
      .filter(({ checked }) => checked)
      .map(({ denomination }) => denomination)
      .reduce((a, b) => Math.min(a, b));

    return (
      <div className="bill-stack bill-stack--empty">
        <p className="bill-stack__message">
          Uh, ¿no tenés ${minCheckedDenomination}?
        </p>
        <p className="bill-stack__message bill-stack__message--small">
          <span
            className="bill-stack__link"
            onClick={(event) => onLend(event, minCheckedDenomination)}
          >
            Te presto ${minCheckedDenomination}
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

  const maxCheckedNonZeroCountDenomination = bills
    .filter(({ checked, count }) => checked && count > 0)
    .map(({ denomination }) => denomination)
    .reduce((a, b) => Math.max(a, b));

  let stackHeight = totalBillCount * BILL_THICKNESS;

  // En desktop, evita que desaparezca el billete de arriba de la pila.
  // TODO: Buscar el número que evita lo mismo en mobile.
  if (stackHeight > 60000000) {
    stackHeight = 60000000;
  }

  return (
    <div className="bill-stack">
      <div
        className={`prism prism--${maxCheckedNonZeroCountDenomination}`}
        style={{
          "--height": `${stackHeight}px`,
        }}
      >
        <div className="prism__face prism__face--front"></div>
        <div className="prism__face prism__face--left"></div>
        <div className="prism__face prism__face--right"></div>
        <div className="prism__face prism__face--top"></div>
        <div className="prism__face prism__face--back"></div>
      </div>
    </div>
  );
}

export default BillStack;
