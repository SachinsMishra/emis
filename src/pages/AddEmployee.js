import '../css/addemployee.scss';
import { MENU_ROUTE } from '../shared/Shared';
import React, { useState } from 'react';
export const AddEmployee = () => {
    const [options, setOptions] = useState();

    const cancelClick = () => {
        window.location.href = MENU_ROUTE.HR_MENU;
    }
    return (
        <div className='add-employee-container'>
            <div className='header'>
                Employee Registration
            </div>
            <div className='input-area'>
                <div className='employee-info'>
                    <label>* First Name</label>
                    <div className='control'>
                        <input placeholder='First Name' className='first-name'></input>
                    </div>
                </div>
                <div className='employee-info'>
                    <label>* Last Name</label>
                    <div className='control'>
                        <input placeholder='Last Name' className='Last-name'></input>
                    </div>
                </div>
                <div className='employee-info'>
                    <label>* Middle Name</label>
                    <div className='control'>
                        <input placeholder='Middle Name' className='Middle-name'></input>
                    </div>
                </div>
                <div className='employee-info'>
                    <label>* Job Title</label>
                    <div className='control'>
                        <input placeholder='Middle Name' className='Middle-name'></input>
                    </div>
                </div>

                <div className='employee-info'>
                    <label>* Job Title</label>
                    <div className='control'>
                        <input placeholder='Middle Name' className='Middle-name'></input>
                    </div>
                </div>

                <div className='employee-info'>
                    <label>* Job Title</label>
                    <div className='control'>
                        <select>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <button className='btn-login'>Submit</button>
                <button className='btn-plain' onClick={cancelClick}>Cancel</button>
            </div>
        </div>
    )
}