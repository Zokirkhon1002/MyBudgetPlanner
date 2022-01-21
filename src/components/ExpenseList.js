import React, { useContext } from "react";
import Expense from "./Expense";
import { AppCtx } from "../ctx/AppCtx";

const ExpenseList = () => {
  const { expenses } = useContext(AppCtx);

  return (
    <ul className="list-group mt-3 mb-3">
      {expenses.map(({ id, name, cost }) => (
        <Expense key={id} id={id} name={name} cost={cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
