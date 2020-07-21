import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: []
};

//create context, pass relevant state to it
export const GlobalContext = createContext(initialState)

//create provider, take {children} components (Header, Balance, ets.) as parameter 
//use hook useReducer and pass AppReducer as custom reducer and initial state
//return provider with value, which will be used anywhere in consumer components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //create function with delete type of dispatch
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  //create function with add type of dispatch
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (<GlobalContext.Provider
    value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
    {children}
  </GlobalContext.Provider>);
}