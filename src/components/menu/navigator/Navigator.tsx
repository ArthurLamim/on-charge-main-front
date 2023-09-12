import {NavitagionMenu} from "./Navigator.styled.ts";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {Flex} from "@radix-ui/themes";

export function Navigator() {
  
  return (
    <Flex gap={"7"} align={'center'}>
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
  )
}