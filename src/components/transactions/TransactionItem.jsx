import { UseGlobalState } from "../../context/GlobalState";
import PropTypes from 'prop-types';

export default function TransactionItem({transaction}) {
    const {deleteTransaction } = UseGlobalState();
  return (
    <li className="bg-zinc-600 text-white px-3 py- rounded-lg mb-2 w-full flex justify-between items-center">
          <p className="text-sm">{transaction.description}</p>
          <div className="flex justify-between">
          <p>{transaction.amount}$</p>
          <button
            onClick={() => {
                deleteTransaction(transaction.id);
            }}>X</button>
          </div>
        </li>
  )
}

TransactionItem.propTypes = {
    transaction: PropTypes.object.isRequired,
    };