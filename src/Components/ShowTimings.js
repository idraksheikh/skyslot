import { React, useState } from 'react';
import { Container, TextField, IconButton, Button } from '@mui/material';
// import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
// Import the functions you need from the SDKs you need
import app from './initfirebase';
import { getFirestore, doc, collection, getDocs } from 'firebase/firestore/lite';
import collectorImage from "../collector.png";
import { CircularProgressbar } from 'react-circular-progressbar';

export default function ShowTimings() {
    const [route, setRoute] = useState([]);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState([]);
    const[entries,setEntries]=useState([]);
    async function showRoutes(location) {
        try {
            if (!((location === ''))) {

                console.log(location);
                setLoading(true);
                const db = getFirestore(app);
                const querySnapshot = await getDocs(collection(db, 'collectorsroute'));
                querySnapshot.forEach((doc) => {
                    
                    doc.data().values.forEach((child)=>{
                        if(child.location==location){
                            setEntries([...entries,{name:doc.data().name,number:doc.data().mobile,timings:child.timings,location:child.location}]);
                            }
                            
                                
                    });
        console.log(entries);

                });
                
                setLoading(false);
                alert("Data Entered Successfully.");
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

    return (
        <>  
            <form>
                <div style={{marginTop:"5%",marginLeft:"1%",marginBottom:"15%"}}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" style={{ width: "50%", marginLeft: "15%" }} name="location" onChange={event => setLocation(event.target.value)} />
                    {loading ? <CircularProgressbar /> : <Button onClick={event => showRoutes(location)} size="Large" style={{ backgroundColor: "#259BAB", color: "#ffffff", fontFamily: "Roboto Slab, serif",marginTop:"1%",marginLeft:"1%" }} className="">Submit</Button>}
                </div>

            </form>

        </>
    );
}