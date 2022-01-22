import React, { useState, useEffect, useContext } from "react";
import Expense from "./Expense";
import { AppCtx } from "../ctx/AppCtx";

const ExpenseList = () => {
  const { expenses, dispatch } = useContext(AppCtx);

  const [filtered, setFiltered] = useState(expenses || []);

  const handleChange = (e) => {
    let result = expenses.filter(({ name }) =>
      name.toLowerCase().includes(e.target.value)
    );
    setFiltered(result);
  };

  const handleDeleteAll = () => {
    let confirmation = window.confirm("Do you want to delete All Expenses?");
    if (!confirmation) return;

    dispatch({
      type: "DELETE_ALL",
      payload: [],
    });
  };

  useEffect(() => {
    setFiltered(expenses);
  }, [expenses]);

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search in Expenses..."
        onChange={handleChange}
      />
      {filtered.length?(
        <div className="row mt-4 text-right">
          <div className="col-sm">
            <button
              title="Delete All"
              type="submit"
              className="btn btn-danger"
              onClick={handleDeleteAll}
            >
              Delete All
            </button>
          </div>
        </div>
      ):null}

      <ul className="list-group mt-3 mb-3">
        {filtered.map(({ id, name, cost }) => (
          <Expense key={id} id={id} name={name} cost={cost} />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
