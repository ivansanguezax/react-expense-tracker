import { UseGlobalState } from "../../context/GlobalState";

export default function TransactionList() {
  const { transactions, deleteTransaction } = UseGlobalState();
  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <h3>{transaction.description}</h3>
          <h3>{transaction.amount}</h3>
          <button
            onClick={() => {
                deleteTransaction(transaction.id);
            }}>X</button>
        </div>
      ))}
    </div>
  );
}
