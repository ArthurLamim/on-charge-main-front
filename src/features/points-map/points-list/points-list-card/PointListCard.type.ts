import {IToten} from "../../../../shared/interfaces/IToten.ts";

export interface PointListCardProps {
  point: IToten
  onNavigate: (direction: google.maps.LatLngLiteral) => void
}