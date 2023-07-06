
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, Currency } = useContext(AppContext);
    
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    
    const submitEvent = () => {
        const stringCost = String(cost)
        if (isNaN(parseFloat(stringCost))) {
            alert("The value is not a number.");
            setCost("");
            return;
        } else {
            if (cost <= 0) {
                alert("You need to enter a value greater than ZERO.");
                setCost("");
                return;

            } else {
                if (cost > remaining) {
                    alert("The value cannot exceed remaining funds $" + remaining);
                    setCost("");
                    return;
                }
            }
        }
        
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
    
    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3">

                    <div className="input-group-prepend" style={{ marginLeft: '2rem', marginRight: '.1rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                            <option value="Marketing" name="marketing"> Marketing</option>
                            <option value="Sales" name="sales">Sales</option>
                            <option value="Finance" name="finance">Finance</option>
                            <option value="HR" name="hr">HR</option>
                            <option value="IT" name="it">IT</option>
                            <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem', marginRight: '.1rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue>Choose...</option>
                            <option defaultValue value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <div className="input-group-prepend" style={{ marginLeft: '2em' }}> 
                    </div>
                    <div className="input-group-prepend" style={{ marginLeft: '2em', marginRight: '.1rem' }}> 
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Amount {Currency}</label>
                    </div>
                    <span style={{ marginRight: '.1rem'}}>
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            min="1"
                            onChange={(event) => setCost(event.target.value)}
                            style={{ width: '120px' }}>
                        </input>
                    </span>
                    <button className="btn btn-primary rounded" onClick={submitEvent}>
                        Save
                    </button>
                    
                </div>
            </div>
        </div>
  );
};

export default AllocationForm;