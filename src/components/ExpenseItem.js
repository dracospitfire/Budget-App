
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import "../App.css" ;
import plus from "../imgs/plus.png";
import minus from "../imgs/minus.png";

const ExpenseItem = (props) => {
    const { dispatch,Currency } = useContext(AppContext);
    
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><button className="transparent-button" onClick={event => increaseAllocation(props.name)}>
                <img src={plus} alt="plus" width="40"/>
            </button>
        </td>
        <td><button className="transparent-button" onClick={event => decreaseAllocation(props.name)}>
                <img src={minus} alt="minus" width="40"/>
            </button>
        </td>
        <td><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;