import {Flex, Separator, Text} from "@radix-ui/themes";
import {PointListProps} from "./PointList.type.ts";
import {useTheme} from "styled-components";
import {PointListCard} from "./points-list-card/PointListCard.tsx";
import {SearchBox} from "../../../components/search-box/SearchBox.tsx";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

export function PointsList(props: PointListProps) {
  const theme = useTheme()
  
  return (
    <Flex
      direction={'column'}
      px={"5"}
      pb={"5"}
      style={{
        maxHeight: '100%',
        boxSizing: 'border-box',
        overflowY: "auto",
        background: theme.color.grey["400"],
        boxShadow: '0px 4px 4px 0px rgba(51,51,51,0.05)',
      }}
    >
      <Flex
        direction={"column"}
        position={"sticky"}
        top={"0"}
        pt={"5"}
        style={{
          zIndex: 1, background:theme.color.grey["400"]
        }}
      >
        <Text size="6" weight="bold" align={"left"} color={"gray"}>
          Confira aqui o eletroposto mais perto de você.
        </Text>
        <SearchBox onSearch={props.onSearch} />
        <Separator my="5" size="4"/>
      </Flex>
      {props.points.length > 0 ? (
        <Flex
          direction={"column"}
          gap={"4"}
        >
          {props.points.map((point) => (
            <PointListCard point={point} onNavigate={props.onNavigate} key={point.id}/>
          ))}
        </Flex>
      ) : (
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          height={'100%'}
        >
          <MagnifyingGlassIcon height="40" width="40" color={"gray"}/>
          <Text size="3" weight="bold" align={"center"} color={"gray"}>
            Nenhum toten encontrado
          </Text>
        </Flex>
      )}
    </Flex>
  )
}