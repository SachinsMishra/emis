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

    const handleCountryChange = (event) => {
        setSelectedCountries(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data here
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Selected Countries:', selectedCountries);
    };

    return (
        <>
            <pre>{JSON.stringify({
                firstName,
                lastName,
                selectedCountries
            }, null, 2)}</pre>
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
                <Button type="submit" variant="contained" color="primary" >
                    Submit
                </Button>
            </div>
        </>
    );
};

export default IntakeForm;
