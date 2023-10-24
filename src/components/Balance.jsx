import {UseGlobalState} from "../context/GlobalState"


export default function Balance() {
   const {transactions} = UseGlobalState();
   
   const amounts = transactions.map(transaction => transaction.amount);
   const total = amounts.reduce((acc,item) => (acc += item),0);

  return (
    <div>
      <h1>Your Balance</h1>
      <h1>
        ${total}
      </h1>
    </div>
  )
}
