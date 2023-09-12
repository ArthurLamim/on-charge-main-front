import { Button, Card, Text} from "@radix-ui/themes";
import {PointListCardProps} from "./PointListCard.type.ts";
import {useGetTotenQuery} from "../../../../redux/api/totenApi.ts";
import {PointItem} from "../../../../components/point-item";
import {useTotenInfo} from "../../../../hooks/useTotenInfo.ts";

export function PointListCard(props: PointListCardProps) {
  const {data} = useGetTotenQuery(props.point.id)
  const { locale, region, available  } = useTotenInfo(data)
  const handleOnClick = () => props.onNavigate(props.point)
  
  return (
    <Card>
      <PointItem.Container>
        <PointItem.Icon />
        <PointItem.Content>
          <PointItem.Details>
            <Text as="div" size="3" weight="bold">
              {locale}
            </Text>
            <Text as="div" size="3" color="gray">
              {region}
            </Text>
            <Text as="div" size="2" weight="bold" color="gray">
              {available}
            </Text>
          </PointItem.Details>
          <Button
            mt={"3"}
            onClick={handleOnClick}
            style={{cursor: "pointer"}}
            color={"grass"}
            size={"2"}
          >
            Traçar rota
          </Button>
        </PointItem.Content>
      </PointItem.Container>
    </Card>
  )
}