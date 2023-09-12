import {BannerTitleProps} from "./BannerTitle.type.ts";
import {Text} from "@radix-ui/themes";
import {useTheme} from "styled-components";

export function BannerTitle(props: BannerTitleProps) {
  const theme = useTheme()
  
  return (
    <Text size={"9"} weight={"bold"} style={{color: theme.color.carbon["600"]}}>
      {props.title}
    </Text>
  )
}