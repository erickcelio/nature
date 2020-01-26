import styled, { css } from 'styled-components'

import Colors from 'styles/Colors'

export const Container = styled.div`
`

export const SlideContainer = styled.div`
  background-color: ${Colors.BLACK};
  display: block;
  opacity: 0;
  position: absolute;
  transition: .5s;
  width: 100%;
  overflow: hidden;

  ${props => props.active && css`
      opacity: 1;
  `}
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`

export const Title = styled.div`
  bottom: 4rem;
  color: ${Colors.WHITE};
  font-size: 4rem;
  left: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  z-index: 2;
`
