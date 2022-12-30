import '../css/addemployee.scss';
import { MENU_ROUTE } from '../shared/Shared';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Select from 'react-select'

export const AddEmployee = () => {
    const [options, setOptions] = useState();
    const [selectOpt, setOpt] = useState();
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            boxShadow: 'none !important',
            borderRadius: '0px', margin: '-1px', fontSize: '12px', borderColor: 'transparent ', borderWidth: '0px',
            ':focus': {
                borderColor: 'transparent !important'
            }
        }),
        option: styles => ({
            ...styles, fontSize: '12px'
        }),
    };
    const menuoptions = [
        { value: 'chocolate', label: 'Chocolate', email: 'Chocolate@dev.in' },
        { value: 'strawberry', label: 'Strawberry', email: 'Strawberry@dev.in' },
        { value: 'strawberry1', label: 'Strawberry1', email: 'Strawberry@dev1.in' },
        { value: 'strawberry2', label: 'Strawberry2', email: 'Strawberry@dev2.in' },
        { value: 'strawberry3', label: 'Strawberry3', email: 'Strawberry@dev3.in' },
        { value: 'strawberry4', label: 'Strawberry4', email: 'Strawberry@dev4.in' },
        { value: 'strawberry5', label: 'Strawberry5', email: 'Strawberry@dev5.in' },
        { value: 'strawberry6', label: 'Strawberry6', email: 'Strawberry@dev6.in' },
        { value: 'strawberry7', label: 'Strawberry7', email: 'Strawberry@dev7.in' },
        { value: 'vanilla', label: 'Vanilla', email: 'test@dev.in' }
    ]
    const textChange = inputValue => { // whole object of selected option 
        console.log(inputValue)
    };
    const customFilter = (option, searchText) => {
        if (
            option.data.label.toLowerCase().includes(searchText.toLowerCase()) ||
            option.data.email.toLowerCase().includes(searchText.toLowerCase())
        ) {
            return true;
        } else {
            return false;
        }
    }
    const formatOptionLabel = ({ value, label, email }) => (
        <div style={{ display: "flex" }}>
            <div>{label}</div>
            <div style={{ marginLeft: "10px", color: "#ccc" }}>
                {email}
            </div>
        </div>
    );
    const cancelClick = () => {
        window.location.href = MENU_ROUTE.HR_MENU;
    }
    return (
        <>

            <div className='add-employee-container'>
                <div className='search-employee'>

                    <div className='search-title'>
                        Employee
                    </div>
                    <div className='icon-search'>
                        <AiOutlineSearch />
                    </div>
                    <div className='control'>
                        <Select onChange={textChange}
                            className='select-control'
                            styles={colourStyles}
                            value={selectOpt}
                            filterOption={customFilter}
                            formatOptionLabel={formatOptionLabel}
                            options={menuoptions}
                            isClearable={true} />
                    </div>
                </div>
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
        </>
    )
}