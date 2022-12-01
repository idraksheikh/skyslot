import './Locate';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup } from "react-map-gl";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import mappin from '../mappin.gif'
import app from './initfirebase';
import { getFirestore, doc, collection, setDoc } from 'firebase/firestore/lite';
import { CircularProgressbar } from 'react-circular-progressbar';



const TOKEN = 'pk.eyJ1IjoiZ3VycHJlZXRhY2hpbnQiLCJhIjoiY2wwMTl0ZjhzMDI2YzNscGEybXQ2MnNvbiJ9.aNZsNi-jXP_wVCH47oNXzQ'



const Locate = () => {
    const navigate = useNavigate();
    const [marker, setMarker] = useState({
        latitude: 75.8577,
        longitude: 22.7196
    });

    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    // const [issue, setIssue] = useState('');
    const [locality, setLocality] = useState('');
    const [loading, setLoading] = useState(false);


    // const [events, logEvents] = useState({});
    // const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
    //     // logEvents(_events => ({ ..._events, onDragEnd: event.lngLat }));
    //     setMarker({
    //         longitude: event.lngLat.lng,
    //         latitude: event.lngLat.lat,
    //     });
    //     console.log(event.lngLat.lng)
    // }, []);



    // const [lng, setLng] = useState(75.8577);
    // const [lat, setLat] = useState(22.7196);
    // const [viewport, setViewport] = useState();
    const [showPopup, setShowPopup] = useState(true);

    const searchResult = (search) => {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${search}&format=json&apiKey=43523aebdf6c49e39fc7fd21720e56ee`)
            .then(response => response.json())
            .then(result => {
                setMarker({
                    longitude: result.results[0].lon,
                    latitude: result.results[0].lat,
                });
                console.log(result.results[0]);
            })
            .catch(error => console.log('error', error));
    }

    async function submitLocality() {
        try {
            if (!((name === '') || (number === null) || (locality === ""))) {
                const issueData = ({ name, number, locality });
                console.log(issueData);
                setLoading(true);
                const db = getFirestore(app);
                const docref = doc(collection(db, 'userLocality'));
                await setDoc(docref, issueData);
                setLoading(false);
                alert("Data Entered Successfully.");
                navigate("/");
            }
            else {
                alert("Please Enter values in fields.");
            }

        } catch (error) {
            setLoading(false);
            alert("Something went wrong.");
            console.log(error);
        }




    }


    return (
        <Container style={{ marginTop: "-3%" }}>
            <Row>
                <Col className='Contact-form' >
                    <h1 style={{ marginLeft: "8%" }}><span style={{ color: "#256D85", fontWeight: "bold", fontFamily: "Roboto Slab, serif" }}>Add Your</span><span style={{ color: "black", fontWeight: "bold", fontFamily: "Roboto Slab, serif" }}> Locality</span><img src={mappin} style={{ width: "17%" }}  alt="location"/></h1>

                    <div className="s-para"><p >If Garbage collecting service is not there in your Locality, Kindly Add you Location so that BinMan can reach to you
                    </p>

                    </div>
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" style={{ width: "70%", marginLeft: "8%", marginTop: 40 }} name="name" onChange={event => setName(event.target.value)} />
                    <br />
                    <TextField id="outlined-basic" label="Contact Number" variant="outlined" style={{ width: "70%", marginLeft: "8%", marginTop: 30 }} name="number" onChange={event => setNumber(event.target.value)} />
                    <br />

                    <TextField id="outlined-basic" label="Locality" variant="outlined" style={{ width: "70%", marginLeft: "8%", marginTop: 30 }} name="locality" onChange={event => setLocality(event.target.value)} onBlur={(event)=>{searchResult(locality)}}/>
                    <br />
                    {loading ? <CircularProgressbar /> : <Button style={{ backgroundColor: '#259BAB', border: 'solid #259BAB 5px', marginTop: '5%', marginLeft: '30%', marginBottom: '10%', fontFamily: "Roboto Slab, serif" }} onClick={event => { submitLocality() }}>Submit</Button>}

                </Col>
                <Col className='App' style={{ marginLeft: "5%", marginTop: "8%" }}>
                    <Map
                        mapboxAccessToken={TOKEN}
                        style={{
                            width: "500px",
                            height: "500px",
                            borderRadius: "15px",
                            border: '2px solid red'
                        }}
                        initialViewState={{
                            latitude: marker.longitude,
                            longitude: marker.latitude,
                            zoom: 10,
                            pitch: 45,
                        }}
                        mapStyle="mapbox://styles/gurpreetachint/cl08awqyn002614mgiqa5daxi"
                    >
                        <Marker
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            draggable={true}
                            // onDragEnd={onMarkerDragEnd}
                        >
                        </Marker>
                        {showPopup && (
                            <Popup longitude={marker.longitude} latitude={marker.latitude}
                                anchor="top"
                                onClose={() => setShowPopup(false)}>
                                Your Location
                            </Popup>)}

                        <GeolocateControl />
                        <NavigationControl
                            position="bottom-right"
                        />

                        <FullscreenControl />
                    </Map>

                </Col>

            </Row>

        </Container>

    )
}

export default Locate;