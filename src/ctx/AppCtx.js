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
          }
    default:
      return state;
  }
};

const initialState = {
  budget: 2_500_000,
  expenses: [
    { id: 123, name: "Shopping", cost: 40_000 },
    { id: 124, name: "Holiday", cost: 400_000 },
    { id: 125, name: "Car service", cost: 50_000 },
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
