import {Box, Button, Flex} from "@radix-ui/themes";
import {ItemSubtitle, ItemTitle} from "./HomeItem.styled.ts";
import {useNavigate} from "react-router-dom";

interface HomeItemProps {
  image: {
    src: string
    alt: string
  }
  button: {
    label: string
    link: string
  }
  title: string
  subtitle: string
  reverse?: boolean
}

export function HomeItem(props: HomeItemProps) {
  const navigate = useNavigate()
  
  return (
    <Flex
      justify={"between"}
      style={{
        flexDirection: props.reverse ? "row-reverse" : "row"
      }}
    >
      <img src={props.image.src} width={'35%'} alt={props.image.alt}/>
      <Flex
        justify={"center"}
        align={"center"}
        width={"auto"}
        direction={"column"}
      >
        <Box p={"9"} style={{width: "80%"}}>
          <Flex direction={"column"} gap={"6"} align={"start"}>
            <Box>
              <ItemTitle>{props.title}</ItemTitle>
              <ItemSubtitle>{props.subtitle}</ItemSubtitle>
            </Box>
            <Button
              color={"grass"}
              size={"4"}
              onClick={() => navigate(props.button.link)}
              style={{
                width: "fit-content",
                cursor: "pointer"
              }}
            >
              {props.button.label}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}