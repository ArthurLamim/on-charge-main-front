import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {getCookie} from "typescript-cookie";
import {IUser} from "../../shared/interfaces/IUser.ts";

const baseUrl = "https://localhost:7266/api/Usuario"

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getCookie("access_token")
      if(token)
        headers.set("Authorization", token)
      return headers
    }
  }),
  endpoints: (builder) => ({
    getLoggedUser: builder.query<IUser,void>({
       query: () => ({
         url: "/usuariotoken",
         method: "GET"
       })
    })
  })
})

export const {
  useGetLoggedUserQuery,
  useLazyGetLoggedUserQuery
} = userApi