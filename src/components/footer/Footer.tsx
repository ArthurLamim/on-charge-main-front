import {Flex} from "@radix-ui/themes";
import {useTheme} from "styled-components";
import logo from "/images/logo-256.png"
import {NavitagionMenu} from "../menu/navigator/Navigator.styled.ts";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {ChevronRightIcon} from "@radix-ui/react-icons";
export function Footer() {
  const theme = useTheme()
  
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      width={"100%"}
      p={"4"}
      style={{backgroundColor: theme.color.grey["600"]}}
    >
      <Flex
        width={"100%"}
        align={"center"}
        py={"4"}
        justify={"between"}
      >
        <img src={logo} width={200}/>
        <Flex gap={"7"}>
          <NavitagionMenu.Root>
            <NavitagionMenu.List>
              <NavigationMenu.Item>
                <NavitagionMenu.Link href={'/#/'}>
                  OnCharge <ChevronRightIcon />
                </NavitagionMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavitagionMenu.Link href={'/#/pontos-recarga'}>
                  Pontos de recarga <ChevronRightIcon />
                </NavitagionMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavitagionMenu.Link href={'/#/segmentos-e-solucoes'}>
                  Segmentos e soluções <ChevronRightIcon />
                </NavitagionMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavitagionMenu.Link href={'/#/loja-virtual'}>
                  Loja virtual <ChevronRightIcon />
                </NavitagionMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavitagionMenu.Link href={'/#/contato'}>
                  Contato <ChevronRightIcon />
                </NavitagionMenu.Link>
              </NavigationMenu.Item>
            </NavitagionMenu.List>
          </NavitagionMenu.Root>
        </Flex>
      </Flex>
     
    </Flex>
  )
}