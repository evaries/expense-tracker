import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function Transaction({ transaction }) {
  // import deleteTransaction from Global Context
  const { deleteTransaction } = useContext(GlobalContext)
  //create + or - sign just for UI
  const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction
