import { MarkerF } from "@react-google-maps/api";
import icon from "/images/point-marker.png"
import {Button, Dialog, Flex} from "@radix-ui/themes";
import {PointMarkerProps} from "./PointMarker.type.ts";
import {useGetTotenQuery} from "../../../redux/api/totenApi.ts";
import {useState} from "react";
import {useTotenInfo} from "../../../hooks/useTotenInfo.ts";
export function PointMarker(props: PointMarkerProps) {
  const { lat, lng } = props.point
  const [infoVisible, setInfoVisible] = useState(false)
  const { data } = useGetTotenQuery(props.point.id, { skip: !infoVisible})
  const {locale, region} = useTotenInfo(data)
  
  const handleOnClickMarker = () => setInfoVisible(true)
  
  const handleOnNavigate = () => props.onNavigate({lat, lng})
  
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <MarkerF {...props} icon={{url: icon}} position={{lat, lng}} onClick={handleOnClickMarker}/>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 350 }}>
        <Dialog.Title>
          <img src={"/images/logo-256.png"} width={125} alt={"OnCharge"}/>
        </Dialog.Title>
        <Dialog.Description size="3" weight={"bold"}>
          {locale}
        </Dialog.Description>
        <Dialog.Description size="2" mb={"3"} weight={"light"}>
          {region}
        </Dialog.Description>
        <Flex gap="3" mt="4" justify="between">
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              style={{cursor: "pointer"}}
            >
              Fechar
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              color={"grass"}
              style={{cursor: "pointer"}}
              onClick={handleOnNavigate}
            >
              Traçar rota
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}