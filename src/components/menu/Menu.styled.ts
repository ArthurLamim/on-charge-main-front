import styled from "styled-components";

export const MenuContainer = styled.div(({theme}) => ({
  paddingBlock: theme.spacing.m,
  paddingInline: '64px',
  top: '0px',
  position: 'sticky',
  width: '100%',
  height: 100,
  minHeight: 100,
  boxSizing: 'border-box',
  zIndex: 1000,
  boxShadow: '0px 4px 4px 0px rgba(51,51,51,0.05)',
  backgroundColor: 'rgba(255, 255, 255)'
}))