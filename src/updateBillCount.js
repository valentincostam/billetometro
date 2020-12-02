function getBillCount(amount, denominations) {
  const sortedDenominations = denominations.sort((a, b) => b - a);
  const lowestDenomination = Math.min(...denominations);
  const billCount = {};
  let remainder = amount;
  let i = 0;

  while (remainder >= lowestDenomination) {
    if (remainder >= sortedDenominations[i]) {
      billCount[sortedDenominations[i]] = Math.floor(
        remainder / sortedDenominations[i]
      );
      remainder = remainder % sortedDenominations[i];
    }

    i++;
  }

  return billCount;
}

function updateBillCount(amount, bills) {
  const updatedBills = [...bills];

  const checkedDenominations = updatedBills
    .filter(({ checked }) => checked)
    .map(({ denomination }) => denomination);

  const billCount = getBillCount(amount, checkedDenominations);

  updatedBills.forEach((bill) => {
    bill.count = billCount[bill.denomination] ?? 0;
  });

  return updatedBills;
}

export default updateBillCount;
