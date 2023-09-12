import { Button, Dialog } from "@radix-ui/themes"
import { RegistrationForm } from "./cadastro-form/Cadastro"
import { useState } from "react"
import { useGetLoggedUserQuery } from "../../../redux/api/userApi"

export function NavigationCadastro() {

    const [isOpen, setIsOpen] = useState(false)

   
      const { data } = useGetLoggedUserQuery()

if(!data)
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
              Registre-se
            </Button>
          </Dialog.Trigger>
          <Dialog.Content style={{ maxWidth: 350 }}>
            <img src={"/images/logo-256.png"} width={125}  alt={"OnCharge"} />
            <RegistrationForm onSuccess={() => setIsOpen(false)}/>
          </Dialog.Content>
        </Dialog.Root>
   )

       return null
        
      
    }