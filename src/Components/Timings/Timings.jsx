import { React, useState } from 'react';
import {TextField, IconButton, Button } from '@mui/material';
// import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
// Import the functions you need from the SDKs you need
import app from '../initfirebase';
import { getFirestore, doc, collection, setDoc } from 'firebase/firestore/lite';
import collectorImage from "../../collector.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import clock from "../../clock-icon.gif";
import "./Timings.css";
// import { confirmAlert } from 'react-confirm-alert';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase





// import {RemoveButton} from '@mui/icons-material';

export default function Timings() {
    const [inputFields, setInputFields] = useState(
        [{ location: '', timings: '' },
        { location: '', timings: '' },]
    );

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState();
    const [loading, setLoading] = useState(false);
    // const ref=firebase.firestore().collection('collecterroute');
    async function addRoutes() {
        try {
            if (!((name === '') || (mobile === null))) {
                const values = [...inputFields];
                const routeData = ({ name, mobile, values });
                console.log(routeData);
                setLoading(true);
                const db = getFirestore(app);
                const docref = doc(collection(db, 'collectorsroute'));
                await setDoc(docref, routeData);
                setLoading(false);
                alert("Data Send Successfully.");
                navigate("/");
            }
            else {
                alert("Please Enter name and mobile number.");
            }

        } catch (error) {
            setLoading(false);
            alert("Something went wrong.");
            console.log(error);
        }




    }

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = (event.target.value).toUpperCase();
        setInputFields(values);
    }


    const handleAddFields = () => {
        setInputFields([...inputFields, { location: '', timings: '' }]);
    }


    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }


    return (<>
        <div className='Timings-super-container'>
            <div className='Timings-image'><img src={collectorImage}  style={{width:"100%"}} alt="collector image" /></div>


            <div className='Timings-main-container'>
                <div className='Timings-heading' ><h1 ><span style={{ color: "#256D85", fontWeight: "bold" }}>Add</span> <span style={{ color: "black", fontWeight: "bold" }}>Routes</span></h1><img src={clock} style={{width:"20%"}} alt="clock"/></div>
                <div className='Timings-form'>
                <form >
                    <div className='Timings-Name-number'>
                        <TextField
                            className='Timings-Textfield mt-3 mb-3 mr-3'
                            id="outlined-name"
                            label="Name"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            className='Timings-Textfield m-3'
                            id="outlined-name"
                            label="Mobile"
                            name="mobile"
                            value={mobile}
                            onChange={(event) => setMobile((event.target.value))}
                        />
                        
                    </div>
                    {inputFields.map((inputFields, index) => (
                        <div key={index} className="Timings-container">
                            <TextField
                                className='Timings-Textfield mt-3 mb-3 mr-3'
                                id="outlined-name"
                                label="Location"
                                name="location"
                                value={inputFields.location}
                                onChange={event => handleChangeInput(index, event)}
                            />
                            <TextField
                                className='Timings-Textfield m-3 '
                                id="outlined-name"
                                label="Timings"
                                name="timings"
                                value={inputFields.timings}
                                onChange={event => handleChangeInput(index, event)}
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
                            <div className='plus-minus-button'>
                            <IconButton onClick={event => handleRemoveFields(index)}>
                                <p >-</p>
                            </IconButton>
                            <IconButton onClick={event => handleAddFields()}>
                                <p >+</p>
                            </IconButton>
                            </div>
                        </div>
                    ))}
                    <div className='Timings-submit'>
                        {loading ? <CircularProgressbar /> : <Button onClick={event => addRoutes()} size="Large" style={{ backgroundColor: "#259BAB", color: "#ffffff", fontFamily: "Roboto Slab, serif", width:"20vw", height:"6vh"}} >Submit</Button>}
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>
    )
}
