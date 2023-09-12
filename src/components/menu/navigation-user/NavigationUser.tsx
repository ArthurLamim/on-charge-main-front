import {Avatar, Button, Dialog, Flex, Text} from "@radix-ui/themes";
import {PersonIcon} from "@radix-ui/react-icons";
import {useLazyGetLoggedUserQuery} from "../../../redux/api/userApi.ts";
import {LoginForm} from "./login-form/LoginForm.tsx";
import {useEffect, useState} from "react";
import {getCookie} from "typescript-cookie";


export function NavigationUser() {
  const token = getCookie("access_token")
  const [getUser, { data }] = useLazyGetLoggedUserQuery()
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    getUser()
  }, [token]);
  
  if(data)
    return (
      <Flex align={"center"} gap={"3"}>
        <Avatar fallback={<PersonIcon />} size={"4"} color={'gray'} variant={'soft'}/>
        <Flex direction={"column"}>
          <Text size={"2"} color={"gray"}>Bem vindo,</Text>
          <Text weight={"bold"} size={"3"} color={"grass"}>{data?.nomeUsuario}</Text>
        </Flex>
      </Flex>
    )
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <Button
          variant={'solid'}
          radius={'large'}
          color={'grass'}
          size={"3"}
          style={{cursor: 'pointer'}}
        >
          Entrar
        </Button>
        
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 350 }}>
        <img src={"/images/logo-256.png"} width={125}  alt={"OnCharge"} />
        <LoginForm onSuccess={() => setIsOpen(false)}/>
      </Dialog.Content>
    </Dialog.Root>
  )
}