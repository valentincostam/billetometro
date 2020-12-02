import React from "react";
import "./BillStats.css";

const BILL_THICKNESS = 0.1; // Millimeters.
const BILL_WEIGHT = 1; // Grams.

function convertLength(millimeters) {
  if (millimeters < 10) return `${millimeters.toFixed(2)} mm`;

  if (millimeters < 1000) return `${(millimeters / 10).toFixed(2)} cm`;

  return `${(millimeters / 1000).toFixed(2)} m`;
}

function convertWeight(grams) {
  if (grams >= 1000) return `${(grams / 1000).toFixed(2)} kg`;

  return `${grams.toFixed(2)} g`;
}

function BillStats({ bills }) {
  const totalBillCount = bills
    .map(({ count }) => count)
    .reduce((total, count) => total + count);

  const stackHeight = totalBillCount * BILL_THICKNESS;
  const stackWeight = totalBillCount * BILL_WEIGHT;

  return (
    <div className="bill-stats">
      <div className="bill-stats__item">
        <div className="bill-stats__label">Cantidad total de billetes</div>
        <div className="bill-stats__value">{totalBillCount}</div>
      </div>
      <div className="bill-stats__item">
        <div className="bill-stats__label">Altura de la pila de billetes</div>
        <div className="bill-stats__value">{convertLength(stackHeight)}</div>
      </div>
      <div className="bill-stats__item">
        <div className="bill-stats__label">Peso de los billetes</div>
        <div className="bill-stats__value">{convertWeight(stackWeight)}</div>
      </div>
    </div>
  );
}

export default BillStats;
