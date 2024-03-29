import { React, useState } from 'react';
import { Container, TextField, Button, Table } from '@mui/material';
// import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
// Import the functions you need from the SDKs you need
import app from '../initfirebase';
import { getFirestore, doc, collection, getDocs } from 'firebase/firestore/lite';
// import collectorImage from "../collector.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import clock from "../../clock-icon.gif";
import "./ShowTimings.css";

export default function ShowTimings() {
    // const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState([]);
    const [entries, setEntries] = useState([]);
    const [data, setData] = useState(false);

    const navigate = useNavigate();
    async function showRoutes(location) {
        try {
            if (!((location === ''))) {

                console.log(location);
                setLoading(true);
                const db = getFirestore(app);
                const querySnapshot = await getDocs(collection(db, 'collectorsroute'));
                querySnapshot.forEach((doc) => {

                    doc.data().values.forEach((child) => {
                        if (child.location == location.toUpperCase()) {
                            setEntries([...entries, { name: doc.data().name, number: doc.data().mobile, timings: child.timings, location: child.location }]);
                        }


                    });
                    console.log(entries);

                });
                setData(true);
                setLoading(false);

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
        <div className='ShowTimings-container' >
            <div className='ShowTimings-button'><Button style={{ backgroundColor: "#259BAB", border: "solid #259BAB 5px", color: "#ffffff"}} onClick={() => {
                navigate("/binman")
            }}> Add Route</Button>{' '}</div>

            <form>
                <div className='ShowTimings-form'>
                    <TextField id="outlined-basic" className='ShowTimings-Location' label="Location" variant="outlined"  name="location" onChange={event => setLocation(event.target.value)} />
                    {loading ? <CircularProgressbar /> : <Button onClick={event => showRoutes(location)}  style={{ backgroundColor: "#259BAB", color: "#ffffff", fontFamily: "Roboto Slab, serif"}} >Submit</Button>}
                </div>
            </form>
            <div className='ShowTimings-table'>

                {
                    data
                        ?
                        <div className="row">
                            <div className="s-heading" style={{ marginBottom: "2%" }}><h1> Garbage collector Timings <span>  for your Locality</span><img src={clock} style={{ width: "10%" }} /></h1>


                            </div>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Timings</th>
                                        <th>Mobile No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*                                     
                                        <tr >
                                            <td>{entries[0].name}</td>
                                            <td>{entries[0].location}</td>
                                            <td>{entries[0].timings}</td>
                                            <td>{entries[0].number}</td>
                                        </tr> */}
                                    {entries && entries.map(
                                        (value, index) => {
                                            return (
                                                <tr key={index + 1}>
                                                    <td>{value.name}</td>
                                                    <td>{value.location}</td>
                                                    <td>{value.timings}</td>
                                                    <td>{value.number}</td>
                                                </tr>
                                            )

                                        }
                                    )}

                                </tbody>
                            </table>
                            {/* <StudentForm func={addRows} /> */}
                        </div>
                        : <p></p>
                }
                {/* <table>
                    <tr><th>Name</th><th>Location</th><th>Timing</th><th>Mobile Number</th></tr>
                    
                    if(entries!=null){entries.map(
                    (entry)=>{
                        <tr key={count}>
                        
                            <td>{entry.name}</td>
                            <td>{entry.location}</td>
                            <td>{entry.timings}</td>
                            <td>{entry.number}</td>

                        </tr>

                        setCount(count+1);
                    }
                )}
                    </table> */}
            </div>

        </div>

        </>
    );
}
