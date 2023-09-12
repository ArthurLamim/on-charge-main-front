import {Flex} from "@radix-ui/themes";
import {HTMLAttributes} from "react";

export function PointItemContainer(props: HTMLAttributes<HTMLDivElement>) {
  
  return (
    <Flex
      gap={"5"}
      align={"start"}
      p={"1"}
    >
      {props.children}
    </Flex>
  )
}