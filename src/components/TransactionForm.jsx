import { useState } from "react";
import {UseGlobalState} from '../context/GlobalState'

export default function TransactionForm() {
  const {addTransaction} = UseGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id:1,
      description,
      amount: +amount,
    })
    
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          step={0.01}
          placeholder="00.00"
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
}
