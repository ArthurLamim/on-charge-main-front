import {IToten} from "../../shared/interfaces/IToten.ts";

export interface MapProps {
  points: IToten[]
  search: string
  destination?: google.maps.LatLngLiteral
  onNavigate: (destination: google.maps.LatLngLiteral) => void
}