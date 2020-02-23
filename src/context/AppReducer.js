export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANS":
      return {
        ...state,
        transaction: state.transaction.filter(tra => tra.id !== action.payload)
      };
    case "ADD_TRANS":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction]
      };
    default:
      return state;
  }
};
