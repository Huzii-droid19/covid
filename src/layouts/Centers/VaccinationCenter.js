import React, { useState, useEffect } from "react";
import "./Centers.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { getVaccinationData } from "../../api/location.api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "90vh",
  borderRaduis: "5",
};
const center = {
  lat: 59.955413,
  lng: 30.337844,
};

function VaccinationCenter() {
  // const key = "AIzaSyACpo2r_kDjjUAJO2tRmxS-ahsQe1PsgIo";
  // const key1 = "AIzaSyDjvRB2R3fsmcmU_pXTHvhIKOTLyJ30wNQ";

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyACpo2r_kDjjUAJO2tRmxS-ahsQe1PsgIo",
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [initialCenter, setInitialCenter] = useState(center);
  // const onMapClick = React.useCallback((e) => {
  //   setMarkers([
  //     ...markers,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date(),
  //     },
  //   ]);
  // }, []);
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialCenter({
        lat: latitude,
        lng: longitude,
      });
    });
    getVaccinationData(setMarkers);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div className="center">
      <h1>
        Vaccination Center{" "}
        <span role="img" aria-label="tent">
          💉
        </span>
      </h1>

      <GoogleMap
        initialCenter={initialCenter}
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={initialCenter}
        // onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => {
          return (
            <Marker
              key={marker.name}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/assets/vaccination.png",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setSelected(marker);
              }}
            />
          );
        })}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Vaccination Center Spotted</h2>
              <p>{selected.name}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default VaccinationCenter;
