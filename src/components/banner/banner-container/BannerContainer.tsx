import {HTMLAttributes} from "react";
import {Flex} from "@radix-ui/themes";

export function BannerContainer(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <Flex position={"relative"}>
      {props.children}
    </Flex>
  )
}