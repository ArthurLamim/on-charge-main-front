import {Flex} from "@radix-ui/themes";
import {MenuLogo} from "./menu-logo/MenuLogo.tsx";
import {Navigator} from "./navigator/Navigator.tsx";
import {MenuContainer} from "./Menu.styled.ts";
import {NavigationUser} from "./navigation-user/NavigationUser.tsx";
import { NavigationCadastro } from "./navigation-user/NavigationCadastro.tsx";




export function Menu() {
  
  return (
    <MenuContainer>
      <Flex justify={'between'} align={'center'}>
        <Flex gap={'7'}>
          <MenuLogo />
          <Navigator />
        </Flex>
        <NavigationUser/>
        <NavigationCadastro/>
      </Flex>
    </MenuContainer>
  )
}