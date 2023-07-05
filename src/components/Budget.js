
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (prop) => {
    const { budget, Currency } = useContext(AppContext);
    const { dispatch, remaining } = useContext(AppContext);
    
    const changeBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    
        const stringBudget = String(budget)
        if (isNaN(parseFloat(stringBudget))) {
            alert("The value is not a number.");
        } else {
            if (remaining < 0) {
                alert("You need to enter a budget greater spending");
            } else {
                if (budget > 20000) {
                    alert("Your budget is excessively high, spenidng power:" + remaining);
                }
            }
        }
    };
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}
                <input
                        type='number'
                        id='budget'
                        value={budget}
                        onChange={event=>changeBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
    
