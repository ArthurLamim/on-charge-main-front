import {GoogleMap} from "@react-google-maps/api";
import {useEffect, useState} from "react";
import {MapProps} from "./Map.type.ts";
import {PointMarker} from "./point-marker/PointMarker.tsx";
import {UserMarker} from "./user-marker/UserMarker.tsx";
import {PointDirection} from "./point-direction/PointDirection.tsx";

export function Map(props: MapProps) {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: -26.917017637650723,
    lng: -49.07818497006829
  })
  const [userPosition, setUserPosition] = useState<google.maps.LatLngLiteral>()
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
 
  const handlePosition = (pos: GeolocationPosition) => {
    const {latitude, longitude} = pos.coords;
    setUserPosition({
      lat: latitude,
      lng: longitude
    })
    setCenter({
      lat: latitude,
      lng: longitude
    })
  }
  
  const handlePositionError = (positionError: GeolocationPositionError) => {
    console.warn(`ERROR(${positionError.code}): ${positionError.message}`);
  }
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(handlePosition, handlePositionError, options);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(handlePosition, handlePositionError, options);
          } else if (result.state === "denied") {
            console.log('Permission denied')
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  
  useEffect(() => {
    if(props.search) {
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({address: props.search})
        .then((result) => {
          if(result.results.length > 0) {
            const { lat, lng } = result.results[0].geometry.location
            setCenter({
              lat: lat(),
              lng: lng()
            })
          }
        }, (error) => console.log("Endereço não encontrado => ", error))
    }
  }, [props.search]);
  
  return(
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      clickableIcons={true}
      center={center}
      zoom={10}
    >
      {props.points.map(point => (
        <PointMarker
          point={point}
          key={point.id}
          usePosition={userPosition}
          onNavigate={props.onNavigate}
        />
      ))}
      <UserMarker position={userPosition} />
      <PointDirection
        destination={props.destination}
        origin={userPosition}
      />
    </GoogleMap>
  )
}