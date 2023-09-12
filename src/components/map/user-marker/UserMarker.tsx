import { MarkerF } from "@react-google-maps/api";
import icon from "/images/user-marker.png"
import {UserMarkerProps} from "./UserMarker.type.ts";
export function UserMarker(props: UserMarkerProps) {
  if(props.position)
    return <MarkerF position={props.position} icon={{url: icon}} clickable={false}/>
  else return null
}