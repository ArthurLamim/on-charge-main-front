import {Box, Button, Flex, Text} from "@radix-ui/themes";
import {useTheme} from "styled-components";
import logo from "/images/icon-512.png"
import {useNavigate} from "react-router-dom";
import {ExclamationTriangleIcon} from "@radix-ui/react-icons";
export function PageUnderConstruction() {
  const theme = useTheme()
  const navigator = useNavigate()
  
  return (
    <Flex
      align={"center"}
      justify={"center"}
      width={"100%"}
      height={"100%"}
      style={{backgroundColor: theme.color.green["200"]}}
    >
      <Flex align={"center"} justify={"center"} gap={"8"}>
        <Flex direction={"column"} gap={"5"} style={{width: 500}}>
          <ExclamationTriangleIcon width={50} height={50} />
          <Text size={"9"}  weight={"bold"} color={"grass"}>Em construção</Text>
          <Text
            size={"5"}
            weight={"light"}
          >
            Nosso site está em construção, mas estamos prontos para começar!
            Estamos preparando algo incrível e emocionante para você. Fique ligado!
          </Text>
          <Box>
            <Button
              color={"grass"}
              size={"4"}
              style={{cursor: "pointer"}}
              onClick={() => navigator("/")}
            >
              Voltar para o início
            </Button>
          </Box>
        </Flex>
        <img src={logo} />
      </Flex>
    </Flex>
  )
}