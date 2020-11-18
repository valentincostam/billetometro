import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AmountInput from "./components/AmountInput";
import BillStack from "./components/BillStack";
import BillList from "./components/BillList";
import BillStats from "./components/BillStats";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function getBillCount(amount, denominations) {
  const sortedDenominations = denominations.sort((a, b) => b - a);
  const lowestDenomination = Math.min(...denominations);
  const billsCount = {};
  let remainder = amount;
  let i = 0;

  while (remainder >= lowestDenomination) {
    if (remainder >= sortedDenominations[i]) {
      billsCount[sortedDenominations[i]] = Math.floor(
        remainder / sortedDenominations[i]
      );
      remainder = remainder % sortedDenominations[i];
    }

    i++;
  }

  return billsCount;
}

function updateBillCount(amount, bills) {
  const updatedBills = [...bills];

  const checkedDenominations = updatedBills
    .filter((bill) => bill.checked)
    .map((bill) => bill.denomination);

  const billCount = getBillCount(amount, checkedDenominations);

  updatedBills.forEach((bill) => {
    if (!billCount[bill.denomination]) {
      bill.count = 0;
    } else {
      bill.count = billCount[bill.denomination];
    }
  });

  return updatedBills;
}

function App() {
  const [amount, setAmount] = useState(100000);
  const [bills, setBills] = useState([
    { checked: true, denomination: 1000, count: 100 },
    { checked: true, denomination: 500, count: 0 },
    { checked: true, denomination: 200, count: 0 },
    { checked: true, denomination: 100, count: 0 },
    { checked: true, denomination: 50, count: 0 },
    { checked: true, denomination: 20, count: 0 },
    { checked: true, denomination: 10, count: 0 },
  ]);

  function handleAmountChange(event, amount) {
    const value = amount ? amount : parseInt(event.target.value);

    if (Number.isNaN(value)) return setAmount("");

    setAmount(value);

    const updatedBills = updateBillCount(value, bills);

    setBills(updatedBills);
  }

  function handleBillsChange(event, denomination) {
    const updatedCheckedBills = bills.map((bill) => {
      if (bill.denomination !== denomination) return bill;

      return {
        ...bill,
        checked: !bill.checked,
      };
    });

    const updatedBills = updateBillCount(amount, updatedCheckedBills);

    setBills(updatedBills);
  }

  return (
    <div className="app">
      <Header />
      <AmountInput value={amount} onChange={handleAmountChange} />
      <BillList bills={bills} onChange={handleBillsChange} />
      <BillStats bills={bills} />
      <BillStack bills={bills} onLend={handleAmountChange} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
