import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AmountInput from "./components/AmountInput";
import BillStack from "./components/BillStack";
import BillList from "./components/BillList";
import BillStats from "./components/BillStats";
import ScrollToTopButton from "./components/ScrollToTopButton";
import updateBillCount from "./updateBillCount";

function App() {
  const [amount, setAmount] = useState(3790);
  const [bills, setBills] = useState([
    { checked: true, denomination: 1000, count: 3 },
    { checked: true, denomination: 500, count: 1 },
    { checked: true, denomination: 200, count: 1 },
    { checked: true, denomination: 100, count: 0 },
    { checked: true, denomination: 50, count: 1 },
    { checked: true, denomination: 20, count: 2 },
    { checked: true, denomination: 10, count: 0 },
  ]);

  function handleAmountChange(event, amount) {
    const value = amount ?? parseInt(event.target.value);

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
