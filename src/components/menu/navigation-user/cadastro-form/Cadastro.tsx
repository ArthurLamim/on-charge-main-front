import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { SignInSchema, SignInSchemaType } from "../../../../shared/schema/SignIn.schema.ts";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useSignInMutation } from "../../../../redux/api/authApi.ts";
import { useAppDispatch } from "../../../../redux/store.ts";
import { userSlice } from "../../../../redux/slice/userSlice.ts";
import { RegistrationFormProps } from "./Cadastro.type.ts";

export function RegistrationForm(props: RegistrationFormProps) {
  const dispatch = useAppDispatch()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema)
  })

  const [registration] = useSignInMutation()

  const onSubmit: SubmitHandler<SignInSchemaType> = (data) => {
    registration(data).unwrap()
      .then((response) => {
       
        dispatch(userSlice.actions.setUser(response))
        props.onSuccess()
      }
    )
  }

  console.log(errors)

  return (
    <Flex
      width={'100%'}
      height={'100%'}
      align={'center'}
      justify={'center'}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction={"column"}
          gap={"2"}
          style={{ width: 300 }}
        >
               <Flex
            width={'100%'}
            direction={'column'}
            gap={"1"}
          >
            <TextField.Root>
              <TextField.Input
                size={"3"}
                color={"grass"}
                id={"nomeUsuario"}
                placeholder={"Nome de Usuário"}
                {...register("nomeUsuario")}
              />
            </TextField.Root>
            <Flex justify={"end"}>
              {errors.nomeUsuario && (
                <Text
                  size={'1'}
                  color={'red'}
                >
                  {errors.nomeUsuario.message}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex
            width={'100%'}
            direction={'column'}
            gap={"1"}
          >
            <TextField.Root>
              <TextField.Input
                size={"3"}
                color={"grass"}
                id={"email"}
                placeholder={"Email"}
                {...register("email")}
              />
            </TextField.Root>
            <Flex justify={"end"}>
              {errors.email && (
                <Text
                  size={'1'}
                  color={'red'}
                >
                  {errors.email.message}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex
            width={'100%'}
            direction={'column'}
            gap={"1"}
          >
            <TextField.Root>
              <TextField.Input
                size={"3"}
                color={"grass"}
                id={"cpf"}
                placeholder={"CPF"}
                {...register("cpfUsuario")}
              />
            </TextField.Root>
            <Flex justify={"end"}>
              {errors.cpfUsuario && (
                <Text
                  size={'1'}
                  color={'red'}
                >
                  {errors.cpfUsuario.message}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex
            width={'100%'}
            direction={'column'}
            gap={"1"}
          >
            <TextField.Root>
              <TextField.Input
                size={"3"}
                color={"grass"}
                id={"dataNascimento"}
                placeholder={"Data de Nascimento"}
                {...register("dataNascimento")}
              />
            </TextField.Root>
            <Flex justify={"end"}>
              {errors.dataNascimento && (
                <Text
                  size={'1'}
                  color={'red'}
                >
                  {errors.dataNascimento.message}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex
            width={'100%'}
            direction={'column'}
            gap={"1"}
          >
            <TextField.Root>
              <TextField.Input
                size={"3"}
                color={"grass"}
                id={"password"}
                placeholder={"Senha"}
                type={passwordVisible ? "text" : "password"}
                {...register("password")}
              />
              <TextField.Slot>
                {passwordVisible ? (
                  <EyeOpenIcon
                    onClick={() => setPasswordVisible(false)}
                    style={{ cursor: "pointer" }}
                    width={20}
                    height={20}
                  />
                ) : (
                  <EyeNoneIcon
                    onClick={() => setPasswordVisible(true)}
                    style={{ cursor: "pointer" }}
                    width={20}
                    height={20}
                  />
                )}
              </TextField.Slot>
            </TextField.Root>
            <Flex justify={"end"}>
              {errors.password && (
                <Text
                  size={'1'}
                  color={'red'}
                >
                  {errors.password.message}
                </Text>
              )}
            </Flex>
          </Flex>
       
          
          <Flex
            width={'100%'}
            direction={'column'}
            gap={"1"}
          >
            <TextField.Root>
              <TextField.Input
                size={"3"}
                color={"grass"}
                id={"confirmPassword"}
                placeholder={"Confirme a Senha"}
                type="password"
                {...register("confirmPassword")}
              />
            </TextField.Root>
            <Flex justify={"end"}>
              {errors.confirmPassword && (
                <Text
                  size={'1'}
                  color={'red'}
                >
                  {errors.confirmPassword.message}
                </Text>
              )}
            </Flex>
          </Flex>
         
          <Button color={"grass"} type={"submit"} mt={"1"}>Cadastrar</Button>
        </Flex>
      </form>
    </Flex>
  )
}
