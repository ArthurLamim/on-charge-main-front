import {Text} from "@radix-ui/themes";
import {BannerSubtitleProps} from "./BannerSubtitle.type.ts";

export function BannerSubtitle(props: BannerSubtitleProps) {
  
  return (
    <Text size={"7"}>
      {props.subtitle}
    </Text>
  )
}