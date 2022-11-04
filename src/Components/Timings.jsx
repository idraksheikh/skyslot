import { React, useState } from 'react';
import { Container, TextField,IconButton,Button} from '@mui/material';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
// Import the functions you need from the SDKs you need
import app from './initfirebase';
import { getFirestore, doc,collection,setDoc } from 'firebase/firestore/lite';
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



    const[name,setName]=useState('');
    const[mobile,setMobile]=useState();

    // const ref=firebase.firestore().collection('collecterroute');
    async function addRoutes() {
        try {
            if(!((name=='')||(mobile==null))){
                const routeData=({name,mobile,...inputFields});
                console.log(routeData);
                const db=getFirestore(app);
                const docref=doc(collection(db,'collectorsroute',));
                await setDoc(docref,routeData);
            }
                
        } catch (error) {
            console.log(error);    
        }
        
        
    
    
    }

    const handleChangeInput=(index,event)=>{
            const values=[...inputFields];
            values[index][event.target.name]=event.target.value;
            setInputFields(values);
    }


   const handleAddFields=()=>{
    setInputFields([...inputFields,{location:'',timings:''}]);
   }


   const handleRemoveFields=(index)=>{
    const values=[...inputFields];
    values.splice(index,1);
    setInputFields(values);
   }


    return (
        <Container className='Timing-header'>
            <h1 className='heading'>Add Routes</h1>
            <form>
                <TextField
                    className='m-3'
                    id="outlined-name"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                />
                <TextField
                    className='m-3'
                    id="outlined-name"
                    label="Mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(event)=>setMobile((event.target.value))}
                />
                {inputFields.map((inputFields, index) => (
                    <div key={index}>
                        <TextField
                            className='m-3'
                            id="outlined-name"
                            label="Location"
                            name="location"
                            value={inputFields.location}
                            onChange={event=>handleChangeInput(index,event)}
                        />
                        <TextField
                            className='m-3 '
                            id="outlined-name"
                            label="Timings"
                            name="timings"
                            value={inputFields.timings}
                            onChange={event=>handleChangeInput(index,event)}
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
                        <IconButton onClick={event=>handleRemoveFields(index)}>
                        <h3 className='m-3'>-</h3>
                        </IconButton>
                        <IconButton onClick={event=>handleAddFields()}>
                        <h3 className='m-3'>+</h3>
                        </IconButton>

                    </div>
                ))}
                <Button onClick={event=>addRoutes()} size="Large" style={{backgroundColor:"#259BAB",color:"#ffffff"}} className="">Submit</Button>
            </form>
        </Container>

    )
}
