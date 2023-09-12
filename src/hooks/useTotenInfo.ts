import {ITotenWithAddress} from "../shared/interfaces/IToten.ts";

export function useTotenInfo(toten?: ITotenWithAddress) {
  const address = toten?.enderecoModel
  
  const locale = address?.rua.concat(", ")
    .concat(address?.numero.toString())
  
  const region = address?.bairro.concat(", ")
    .concat(address?.cidade).concat(" - ")
    .concat(address?.estado)
  
  const available = toten?.disponivel ? "Disponível" : "Indisponível"
  
  const connector = toten?.tipoConector
  
  const value = toten?.precoVoltagem.toLocaleString("pt-BR", {currency: "BRL", style: "currency"})
  
  return {
    locale,
    region,
    available,
    connector,
    value
  }
}