import {IAddress} from "./IAddress.ts";

export interface IToten {
  id: number
  tipoConector: string
  cargaUsada: string
  tempoUso: string
  disponivel: boolean
  voltPorMinuto: number
  lat: number
  lng: number
  precoVoltagem: number
  enderecoId: number
}

export interface ITotenWithAddress extends IToten {
  enderecoModel: IAddress
}