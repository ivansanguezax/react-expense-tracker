import { useState } from "react";
import {UseGlobalState} from '../../context/GlobalState'

export default function TransactionForm() {
  const {addTransaction} = UseGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id:window.crypto.randomUUID(),
      description,
      amount: +amount
    })
    
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          step={0.01}
          placeholder="00.00"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white  px-3 py-2 rounded-lg block mb-2 w-full">Add Transaction</button>
      </form>
    </div>
  );
}
