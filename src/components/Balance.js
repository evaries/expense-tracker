import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function Balance() {
  //import transactions from Global Context
  const { transactions } = useContext(GlobalContext)
  //get amounts
  const amounts = transactions.map(transaction => transaction.amount);
  //add all amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
