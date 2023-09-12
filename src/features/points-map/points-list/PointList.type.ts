import {IToten} from "../../../shared/interfaces/IToten.ts";

export interface PointListProps {
  points: IToten[]
  onNavigate: (destination: google.maps.LatLngLiteral) => void
  onSearch: (search: string) => void
}