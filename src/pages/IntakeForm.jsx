import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Checkbox, ListItemText } from '@mui/material';

const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan', 'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
    // Add more countries as needed
];

const IntakeForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [textFieldValue, setTextFieldValue] = useState('');
    const [textFieldError, setTextFieldError] = useState('');
    const [tabsInfo, setTabsInfo] = useState(
        {
            selectedTab: [],
            tabs: [
                {
                    tabName: 'Contacted',
                    tabId: 1,
                    isActive: false,
                }, {
                    tabName: 'Not Contacted',
                    isActive: false,
                    tabId: 2
                }, {
                    tabName: 'xyz',
                    isActive: false,
                    tabId: 3
                }
            ]
        }
    )
    const handleCountryChange = (event) => {
        setSelectedCountries(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data here
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Selected Countries:', selectedCountries);
        console.log('Boolean Phone Number:', Boolean(textFieldError));
    };
    const selectedTab = (tabInfo) => {
        const newTabs = tabsInfo.tabs.map((x) => {
            x.isActive = (tabInfo.tabName === x.tabName);
            return x
        });
        setTabsInfo({
            selectedTab: tabInfo,
            tabs: newTabs
        });

    }

    const FormComponent = () => (
        <div className='intake-form'>
            <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                margin="normal"
            />
            <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                margin="normal"
            />
            <TextField
                label="Phone Number"
                variant="outlined"
                type='number'
                inputProps={{
                    minLength: 10, // Set the minimum length to 10 characters
                    maxLength: 10, // Set the maximum length to 10 characters
                }}
                value={textFieldValue}
                onChange={(e) => {
                    const value = e.target.value;
                    setTextFieldValue(value);
                    if (value.length > 10) {
                        setTextFieldValue(value.substring(0, 10));
                        return
                    }

                    // Check if the input exceeds 10 characters
                    if (value.length > 10 || value.length < 10) {
                        setTextFieldError('Phone Number Should of 10 Digits');
                    } else {
                        setTextFieldError('');
                    }
                }}
                error={Boolean(textFieldError)}
                helperText={textFieldError}
            />
            <FormControl margin="normal">
                <InputLabel>Country</InputLabel>
                <Select
                    multiple
                    value={selectedCountries}
                    onChange={handleCountryChange}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: 200,
                            },
                        },
                    }}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                            <Checkbox checked={selectedCountries.indexOf(country) > -1} />
                            <ListItemText primary={country} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} >
                Submit
            </Button>
        </div>
    )

    return (
        <>
            {/* <pre>{JSON.stringify({
                tabs: tabsInfo
            }, null, 2)}</pre> */}
            <div className='tabs'>
                {
                    tabsInfo.tabs.map((tab) => (
                        <div key={tab.tabName} onClick={(e) => selectedTab(tab)} className={`tab ${tab.isActive && 'active'}`}>{tab.tabName}
                        </div>
                    ))
                }
            </div>
            {tabsInfo.selectedTab.tabId === 1 ? <FormComponent /> : 'No Component'}
        </>
    );
};

export default IntakeForm;
