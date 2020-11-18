import React from "react";
import "./BillStats.css";

const REAL_BILL_THICKNESS = 0.1; // Millimeters.
const REAL_BILL_WEIGHT = 1; // Grams.

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
    .map((bill) => bill.count)
    .reduce((total, count) => total + count);

  const realStackHeight = totalBillCount * REAL_BILL_THICKNESS;
  const realStackWeight = totalBillCount * REAL_BILL_WEIGHT;

  return (
    <div className="bill-stats">
      <div className="bill-stats__item">
        <div className="bill-stats__label">Cantidad total de billetes</div>
        <div className="bill-stats__value">{totalBillCount}</div>
      </div>
      <div className="bill-stats__item">
        <div className="bill-stats__label">Altura de los billetes</div>
        <div className="bill-stats__value">
          {convertLength(realStackHeight)}
        </div>
      </div>
      <div className="bill-stats__item">
        <div className="bill-stats__label">Peso de los billetes</div>
        <div className="bill-stats__value">
          {convertWeight(realStackWeight)}
        </div>
      </div>
    </div>
  );
}

export default BillStats;
