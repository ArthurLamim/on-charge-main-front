import {IToten} from "../../../shared/interfaces/IToten.ts";

export interface PointMarkerProps {
  point: IToten
  usePosition?: google.maps.LatLngLiteral
  onNavigate: (destination: google.maps.LatLngLiteral) => void
}