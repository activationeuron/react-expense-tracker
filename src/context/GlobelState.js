import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial state
const initialState = {
  transaction: [
    {
      id: 1,
      text: "Flower",
      amount: -120
    },
    {
      id: 2,
      text: "Book",
      amount: 1200
    },
    {
      id: 3,
      text: "Camara",
      amount: -3400
    }
  ]
};
// create context
export const GlobelContext = createContext(initialState);

// provider
export const GlobelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   actions
  function deleteTransectionn(id) {
    dispatch({
      type: "DELETE_TRANS",
      payload: id
    });
  }

  function addTransection(trans) {
    dispatch({
      type: "ADD_TRANS",
      payload: trans
    });
  }
  return (
    <GlobelContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransectionn,
        addTransection
      }}
    >
      {children}
    </GlobelContext.Provider>
  );
};
