import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IToten, ITotenWithAddress} from "../../shared/interfaces/IToten.ts";

const baseUrl = "https://localhost:7266/api/Toten"
export const totenApi = createApi({
  reducerPath: "totenApi",
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints: (builder) => ({
    getToten: builder.query<ITotenWithAddress, number>({
      query: (id) => ({
        url: `${id}`,
        method: "GET"
      })
    }),
    getTotens: builder.query<IToten[], string>({
      query: (text) => ({
        url: "/BuscarPorEndereco",
        method: "GET",
        params: {
          texto: text
        }
      })
    })
  })
})

export const { useGetTotensQuery, useGetTotenQuery } = totenApi