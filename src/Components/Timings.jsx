import { React, useState } from 'react';
import { Container, TextField,IconButton} from '@mui/material';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import {RemoveButton} from '@mui/icons-material';

export default function Timings() {
    const [inputFields, setInputFields] = useState(
        [{ location: '', timings: '' },]
    );
    const[name,setName]=useState('');
    const[mobile,setMobile]=useState(0);

    const handlechange = (event) => {
        const { name, value } = event.target;
        setInputFields(()=>{

        }
            
            
            
        )
    }
    return (
        <Container className='Timing-header'>
            <h1 className='heading'>Add Timings</h1>
            <form>
                <TextField
                    id="outlined-name"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(event)=>setName(event.value)}
                />
                <TextField
                    id="outlined-name"
                    label="Mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(event)=>setMobile((event.value))}
                />
                {inputFields.map((inputFields, index) => (
                    <div key={index}>
                        <TextField
                            id="outlined-name"
                            label="Location"
                            name="location"
                            value={inputFields.location}
                            // onChange={handlechange}
                        />
                        <TextField
                            id="outlined-name"
                            label="Timings"
                            name="timings"
                            value={inputFields.timings}
                            // onChange={handlechange}
                        />
                        {/* <LocalizationProvider >
                            <TimePicker
                                label="Timings"
                                value={inputFields.timings}
                                onChange={handlechange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider> */}
                        <IconButton>
                        <RemoveButton/>
                        </IconButton>

                    </div>
                ))}
            </form>
        </Container>

    )
}
