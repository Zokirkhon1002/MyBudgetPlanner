import React from "react";
import {} from "number-brm";

const ViewBudget = ({ budget, handleEditClick }) => {
  return (
    <>
      <span>Budget: ₩ {Number(budget).brm()}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
