import {HTMLAttributes} from "react";
import {Flex} from "@radix-ui/themes";

export function BannerContent(props: HTMLAttributes<HTMLDivElement>) {
  
  return (
    <Flex
      position={"absolute"}
      direction={'column'}
      gap={"2"}
      width={"100%"}
      style={{
        transform: "translate(-50%,-50%)",
        left: "50%",
        top: "50%",
        textAlign: "center"
      }}
    >
      {props.children}
    </Flex>
  )
}