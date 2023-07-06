import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under

//Code to import Remaining.js
import RemainingBudget from './components/Remaining';
//Code to import ExpenseTotal.js
import ExpenseTotal from './components/ExpenseTotal';
//Code to import Currency.js
import Currency from './components/Currency';
//Code to import ExpenseList.js
import ExpenseList from './components/ExpenseList';
//Code to import AllocationFrom.js
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className = 'row mt-3'>
                        {/* Add Budget component here under */
                    // Budget component
                        <div className='col-sm'>
                            <Budget/>
                        </div>
                    }        
                        {/* Add Remaining component here under */
                    //Remaining component
                        <div className='col-sm'>
                            <RemainingBudget/>
                        </div>
                    }        
                        {/* Add ExpenseTotal component here under */
                    //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal/>
                        </div>
                    }           
                        {/* Add Currency component here under */
                    //Currency component
                        <div className='col-sm'>
                            <Currency/>
                        </div>   
                    }     
                </div>
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row'>
                        {/* Add ExpenseItem component here under */
                    //ExpenseList component
                        <div className='col-sm'>
                            <ExpenseList/>
                        </div>
                    }        
                    </div>
                    <h3 className='mt-3'>Change Allocation</h3>
                    <div className='row mt-3'>
                        {/* Add AllocationForm component here under */
                    //AllocationForm component
                        <div className='col-sm'>
                            <AllocationForm/>
                        </div>
                    }    
                    </div>    
            </div>
        </AppProvider>
    );
};
export default App;
