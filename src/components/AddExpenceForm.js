import React, {useState, useContext} from "react";
import {AppCtx} from "../ctx/AppCtx";
import {v4} from "uuid"

const AddExpenceForm = () => {
  const { dispatch} = useContext(AppCtx)
  const [name, setName] = useState("")
  const [cost, setCost] = useState("")


  const onSubmit = (e)=> {
    e.preventDefault();

    const newItem = {
      id: v4(),
      name: name,
      cost: Number(cost)
    }


    dispatch({
      type: "ADD",
      payload: newItem
    })

    setName("")
    setCost("")
  }


  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name"> Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e)=> setCost(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-2">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenceForm;
