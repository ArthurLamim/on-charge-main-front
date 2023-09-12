import {Button, TextField} from "@radix-ui/themes";
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";
import React, {useCallback, useState} from "react";
import {SearchBoxProps} from "./SearchBox.type.ts";

export function SearchBox(props: SearchBoxProps) {
  const [value, setValue] = useState("")
  
  const handleOnSearch = useCallback(
    () =>props.onSearch(value)
  , [value])
  
  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter")
      props.onSearch(value)
  }, [value])
  
  return (
    <TextField.Root size={"3"} mt={"4"} color={"grass"}>
      <TextField.Input
        placeholder="Pesquisar"
        onKeyDown={onKeyDown}
        onChange={(event) => setValue(event.target.value)}
      />
      <TextField.Slot style={{ margin: 0, padding: 0 }}>
        <Button
          onClick={handleOnSearch}
          size={"3"}
          color={"grass"}
          style={{ cursor: "pointer"}}
        >
          <MagnifyingGlassIcon height="25" width="25" />
        </Button>
      </TextField.Slot>
    </TextField.Root>
  )
}