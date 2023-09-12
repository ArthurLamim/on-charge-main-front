import {useEffect, useState} from "react";
import {PointDirectionProps} from "./PointDirection.type.ts";
import {DirectionsRenderer} from "@react-google-maps/api";

export function PointDirection(props: PointDirectionProps) {
  const [directions, setDirections] = useState<google.maps.DirectionsResult>()
  
  useEffect(() => {
    if(props.destination && props.origin) {
      const service = new google.maps.DirectionsService()
      service.route({
        origin: props.origin,
        destination: props.destination,
        travelMode: google.maps.TravelMode.DRIVING
      }).then((direction) => setDirections(direction), (reason) => console.log(reason))
    } else setDirections(undefined)
  }, [props])
  
  if(directions)
    return (
      <DirectionsRenderer directions={directions} options={{ markerOptions: {visible: false} }} />
    )
  return null
}