import styled from "styled-components";

export const ItemTitle = styled.h3(({theme}) => ({
  fontSize: "2rem",
  lineHeight: "2.5rem",
  color: theme.color.carbon["600"],
  margin: 0
}))

export const ItemSubtitle = styled.p(({theme}) => ({
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: theme.color.carbon["600"],
  margin: 0,
  fontWeight: "normal"
}))