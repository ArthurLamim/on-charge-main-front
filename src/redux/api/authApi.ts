import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ILoginResult} from "../../shared/interfaces/ILoginResult.ts";
import {ILoginInput} from "../../shared/interfaces/ILoginInput.ts";
import {ISignInInput} from "../../shared/interfaces/ISignInInput.ts";
import {ISignInResult} from "../../shared/interfaces/ISignInResult.ts";

const baseUrl = "https://localhost:7266/api/"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResult, ILoginInput>({
      query: (data) => ({
        url: "Login",
        method: "POST",
        body: data,
      })
    }),
    signIn: builder.mutation<ISignInResult, ISignInInput>({
      query: (data) => ({
        url: "Acesso",
        method: "POST",
        body: data,
      })
    })
  })
})

export const {
  useSignInMutation,
  useLoginMutation
} = authApi