import React, { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
      case "ADD":
          return {
              ...state,
              expenses: [...state.expenses, action.payload]
          };
      case "DELETE":
          return {
            ...state,
            expenses: state.expenses.filter(({id})=> id !== action.payload)
          };
      case "EDIT":
          return {
            ...state,
            budget: action.payload,
          };
      case "DELETE_ALL":
          return {
            ...state,
            expenses: action.payload
          }
    default:
      return state;
  }
};

const initialState = {
  budget: 2500000,
  expenses: [
    { id: 123, name: "Olma", cost: 5000 },
    { id: 124, name: "Uzbegim", cost: 20000 },
    { id: 125, name: "Banan", cost: 5000 },
  ],
};

export const AppCtx = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppCtx.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
