import './Locate';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup} from "react-map-gl";
import { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {TextField, TextareaAutosize} from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import mappin from '../mappin.gif'



const TOKEN = 'pk.eyJ1IjoiZ3VycHJlZXRhY2hpbnQiLCJhIjoiY2wwMTl0ZjhzMDI2YzNscGEybXQ2MnNvbiJ9.aNZsNi-jXP_wVCH47oNXzQ'



const Locate = () => {
    
    const [marker, setMarker] = useState({
        latitude: 40,
        longitude: -100
      });

      const[name,setName]=useState('');
      const[number,setNumber]=useState();
      const[issue,setIssue]=useState('');
      const[locality,setLocality]=useState('');
      const[loading,setLoading]=useState(false); 
    

    const [events, logEvents] = useState({});
    const onMarkerDragEnd = useCallback((event: MarkerDragEvent) => {
        logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
        setMarker({
             longitude: event.lngLat.lng,
             latitude: event.lngLat.lat,
        });
            console.log(event.lngLat.lng)
    }, []);



    const [lng, setLng] = useState(75.8577);
    const [lat, setLat] = useState(22.7196);
    // const [viewport, setViewport] = useState();
    const [showPopup, setShowPopup] = useState(true);

    
    return(
        <Container>
          <Row>
          <Col className='Contact-form'>
            <h1 style = {{marginLeft:"8%"}}><span style={{color:"#256D85", fontWeight:"bold",fontFamily:"Roboto Slab, serif"}}>Add Your</span><span style={{color:"black", fontWeight:"bold",fontFamily:"Roboto Slab, serif"}}> Locality</span><img src={mappin} style={{width:"17%"}}/></h1>
            <TextField id="outlined-basic" label="Your Name" variant="outlined" style = {{ width: "70%",marginLeft:"8%",marginTop:40}} name="name" onChange={event=>setName(event.target.value)} />
            <br/>
            <TextField id="outlined-basic" label="Contact Number" variant="outlined" style = {{ width:"70%", marginLeft:"8%",marginTop:30}} name="number" onChange={event=>setNumber(event.target.value)}/>
            <br/>
            
            <TextField id="outlined-basic" label="Locality" variant="outlined" style={{width:"70%", marginLeft:"8%", marginTop:30}} name="locality" onChange={event=>setLocality(event.target.value)} />
            <br/>
            {loading? <CircularProgressbar  />:<Button style = {{backgroundColor:'#8EC3B0',border:'solid #259BAB 5px',marginTop:'5%',marginLeft:'30%',marginBottom:'10%',fontFamily:"Roboto Slab, serif"}}>Submit</Button>}

  </Col>
        <Col className='App' style={{marginLeft:"5%",marginTop:"3%"}}>
            <Map
                mapboxAccessToken={TOKEN}
                style={{
                    width: "500px",
                    height: "500px",
                    borderRadius: "15px",
                    border: '2px solid red'
                }}
                initialViewState={{
                    latitude: lat,
                    longitude: lng,
                    zoom: 15,
                    pitch: 45,
                }}
                mapStyle="mapbox://styles/gurpreetachint/cl08awqyn002614mgiqa5daxi"
            >
                <Marker
                longitude={lng}
                latitude={lat}
                draggable={true}
                onDragEnd={onMarkerDragEnd}
            >
            </Marker>
                {showPopup && (
                <Popup longitude={lng} latitude={lat}
                    anchor="top"
                    onClose={() => setShowPopup(false)}>
                    Your Location
                </Popup>)}

                <GeolocateControl />    
                <NavigationControl
                    position="bottom-right"
                />
                
                <FullscreenControl/>
            </Map>    
            
        </Col>

        </Row>

        </Container>
        
    )
}

export default Locate;