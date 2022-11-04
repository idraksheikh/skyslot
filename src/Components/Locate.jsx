import './Locate';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, GeolocateControl, FullscreenControl, Popup} from "react-map-gl";
import { useCallback, useState } from 'react';



const TOKEN = 'pk.eyJ1IjoiZ3VycHJlZXRhY2hpbnQiLCJhIjoiY2wwMTl0ZjhzMDI2YzNscGEybXQ2MnNvbiJ9.aNZsNi-jXP_wVCH47oNXzQ'



const Locate = () => {
    
    const [marker, setMarker] = useState({
        latitude: 40,
        longitude: -100
      });

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
        <div className='App' style={{marginLeft:"5%",marginTop:"3%"}}>
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
                    tilt: 5,
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
                    anchor="bottom"
                    onClose={() => setShowPopup(false)}>
                    You are here
                </Popup>)}
            
                <NavigationControl
                    position="bottom-right"
                />
                
                <FullscreenControl/>
            </Map>    
            
        </div>
    )
}

export default Locate;