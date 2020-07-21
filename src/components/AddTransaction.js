import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import { GlobalContext } from '../context/GlobalState'


function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  //import addTransaction from GlobalContext
  const { addTransaction } = useContext(GlobalContext)
  //alert for blank field
  const errorAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Fields can not be blank!',
    })
  }

  //create new transaction with id, text and amount and pass it into addTransaction func
  // which will take it as a payload for dispatch
  const onSubmit = e => {
    if (text && amount) {
      e.preventDefault()
      const newTransaction = {
        id: uuidv4(),
        text,
        amount: +amount //parse string to number
      }
      addTransaction(newTransaction)
      //clear inputs field
      setText('')
      setAmount('')
    } else {
      e.preventDefault()
      errorAlert()
    }
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
           (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
