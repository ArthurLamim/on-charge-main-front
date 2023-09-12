import {HTMLAttributes, useEffect, useState} from "react";
import {Location, useLocation} from "react-router-dom";
import {Box} from "@radix-ui/themes";

export interface FadeTransition extends Pick<HTMLAttributes<HTMLDivElement>, 'children'> {
  displayLocation: Location
  onTransitionEnd: (location: Location) => void
}
export function FadeTransition(props: FadeTransition) {
  const location = useLocation();
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  useEffect(() => {
    if (location !== props.displayLocation) setTransitionStage("fadeOut");
  }, [location, props.displayLocation]);
  
  const onAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      props.onTransitionEnd(location);
    }
  }
  
  return (
    <Box
      style={{ height: 'calc(100vh - 100px)'}}
      className={`${transitionStage}`}
      onAnimationEnd={onAnimationEnd}
    >
      {props.children}
    </Box>
  )
}