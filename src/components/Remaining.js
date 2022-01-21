import React, {useContext} from 'react';
import {AppCtx} from "../ctx/AppCtx";
import {} from "number-brm";


const Remaining = () => {
    const {budget, expenses} = useContext(AppCtx)

    const total = expenses.reduce((acc,cur)=> (acc += cur.cost),0);
    let result = budget - total;

    const alertType = (total > budget) ? "alert-danger":"alert-success"
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ₩ {result.brm()}</span>
        </div>
    )
}

export default Remaining
