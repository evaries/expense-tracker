//create custom reducer
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        //spread state, filter it and show all transactions except transaction with id
        // which will be deleted
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    case 'ADD_TRANSACTION':
      return {
        //spread state, take fild transactions, in array - first element from form submit
        // and than use rest operator to add this element into state
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
}
