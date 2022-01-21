import React, {useContext} from 'react';
import {AppCtx} from "../ctx/AppCtx"
import {} from "number-brm";


const SpentSoFar = () => {
    const {expenses} = useContext(AppCtx);

    const total = expenses.reduce((acc,cur)=> (acc += cur.cost),0);

    return (
        <div className="alert alert-primary">
            <span>Spent so far: ₩ {total.brm()}</span>
        </div>
    )
}

export default SpentSoFar
