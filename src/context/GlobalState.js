import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: []
};

export const GlobalContext = createContext(initialState)

// create provider, recive {children} components (Header, Balance, ets.) as parameter, 
// in useReducer pass AppReducer as custom reducer and initial state
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }
  // return provider with value, which will be available in consuming components
  return (<GlobalContext.Provider
    value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
    {children}
  </GlobalContext.Provider>);
}