import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Flex, Text, TextField} from "@radix-ui/themes";
import {LoginSchema, LoginSchemaType} from "../../../../shared/schema/Login.schema.ts";
import {EyeNoneIcon, EyeOpenIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import {useLoginMutation} from "../../../../redux/api/authApi.ts";
import {useAppDispatch} from "../../../../redux/store.ts";
import {userSlice} from "../../../../redux/slice/userSlice.ts";
import {setCookie} from "typescript-cookie";
import {LoginFormProps} from "./LoginForm.type.ts";


export function LoginForm(props: LoginFormProps) {
  const dispatch = useAppDispatch()
  const [login] = useLoginMutation()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  })
  
  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    login(data).unwrap()
      .then((response) => {
        setCookie("access_token", response.token)
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
          style={{ width: 300}}
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
                )
              }
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
                    style={{cursor: "pointer"}}
                    width={20}
                    height={20}
                  />
                ) : (
                  <EyeNoneIcon
                    onClick={() => setPasswordVisible(true)}
                    style={{cursor: "pointer"}}
                    width={20}
                    height={20}
                  />
                )}
              </TextField.Slot>
            </TextField.Root>
            <Flex justify={"end"}>
              {
                errors.password && (
                  <Text
                    size={'1'}
                    color={'red'}
                  >
                    {errors.password.message}
                  </Text>
                )
              }
            </Flex>
          </Flex>
          <Button color={"grass"} type={"submit"} mt={"1"}>Entrar</Button>
          
        </Flex>
      </form>
    </Flex>
  )
}