import {HTMLAttributes} from "react";
import {Box} from "@radix-ui/themes";

export function PointItemContent(props: HTMLAttributes<HTMLDivElement>) {
  
  return (
    <Box>
      {props.children}
    </Box>
  )
}