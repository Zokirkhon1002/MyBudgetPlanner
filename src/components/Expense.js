import React, {useContext} from "react";
import { TiDelete } from "react-icons/ti";
import {AppCtx} from "../ctx/AppCtx"
import {} from "number-brm";

const Expense = ({id, name, cost }) => {

  const {dispatch} = useContext(AppCtx);


  const handleDelete = () => {
    let confirmation = window.confirm(`Are you really delete the ${name}`);
    if(!confirmation) return;
    dispatch({
      type: "DELETE",
      payload: id
    })
  }


  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">₩ {cost.brm()}</span>
        <TiDelete className="del" style={{cursor: "pointer"}} onClick={()=> handleDelete(id)} size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default Expense;
