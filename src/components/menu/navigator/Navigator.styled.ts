import styled from "styled-components";
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';

const NavigationRoot = styled(RadixNavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  padding: 0;
  margin: 0;
`

const NavigationList = styled(RadixNavigationMenu.List)(({theme}) => ({
  display: 'flex',
  listStyle: 'none',
  gap: theme.spacing.m,
  padding: 0,
  margin: 0
}))

const NavigationLink = styled(RadixNavigationMenu.Link)(({theme}) => ({
  padding: theme.spacing.s,
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  fontWeight: 500,
  borderRadius: '8px',
  fontSize: theme.font.m,
  color: theme.color.green["600"],
  display: 'inline-flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.color.green["200"]
  }
}))

export const NavitagionMenu = {
  Root: NavigationRoot,
  List: NavigationList,
  Link: NavigationLink
}