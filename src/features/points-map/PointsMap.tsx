import {Map} from "../../components/map/Map.tsx";
import {useGetTotensQuery} from "../../redux/api/totenApi.ts";
import {Flex} from "@radix-ui/themes";
import {useState} from "react";
import {PointsList} from "./points-list/PointsList.tsx";

export function PointsMap() {
  const [destination, setDestination] = useState<google.maps.LatLngLiteral>()
  const [search, setSearch] = useState("")
  const {data = []} = useGetTotensQuery(search)
  
  const handleOnSearch = (search: string) => {
    setDestination(undefined)
    setSearch(search)
  }
  
  return (
    <Flex
      width={'100%'}
      height={'100%'}
    >
      <PointsList
        points={data}
        onNavigate={setDestination}
        onSearch={handleOnSearch}
      />
      <Map
        points={data}
        destination={destination}
        search={search}
        onNavigate={setDestination}
      />
    </Flex>
  )
}