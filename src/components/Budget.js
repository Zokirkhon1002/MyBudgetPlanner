import React, {useContext} from 'react';
import {AppCtx} from "../ctx/AppCtx"
import {} from "number-brm";



const Budget = () => {
    const {budget} = useContext(AppCtx)
    return (
        <div className="alert alert-secondary">
            <span>Budget: ₩ {budget.brm()}</span>
        </div>
    )
}

export default Budget
