import React, {useState, useContext} from 'react';
import {AppCtx} from "../ctx/AppCtx"
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';



const Budget = () => {
    const {budget, dispatch} = useContext(AppCtx)
    const [isEditing, setIsEditing] = useState(false);


    const handleSaveClick = (value)=> {
        dispatch({
            type: "EDIT",
            payload: value
        })
        setIsEditing(false)
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    return (
        <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ):
            (
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
    )
}

export default Budget
