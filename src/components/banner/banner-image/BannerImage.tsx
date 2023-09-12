import {BannerImageProps} from "./BannerImage.type.ts";

export function BannerImage(props: BannerImageProps) {
  return (
    <img
      src={props.src}
      height={props.height}
      style={{
        width: "100%",
        objectFit: "cover"
      }}
      alt={props.alt}/>
  )
}