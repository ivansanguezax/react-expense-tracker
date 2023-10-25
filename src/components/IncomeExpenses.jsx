import { UseGlobalState } from "../context/GlobalState";

export default function IncomeExpenses() {
  const { transactions } = UseGlobalState();
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2) * -1 ;
    
  return (
    <>
      <div className=" flex justify-between">
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div className=" flex justify-between">
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  );
}
