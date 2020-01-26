import { Column, Row } from 'styles/Common'
import styled, { css } from 'styled-components'

import Colors from 'styles/Colors'

export const SectionContainer = styled.section`
  position: relative;
  min-height: calc(100vh - 6.7rem);
  ${props => props.odd && css`
    background-color: ${Colors.SEASHELL_PEACH};
  `}
`

export const SectionAnchor = styled.div`
  position: absolute;
  top: -6.7rem;
`

export const Container = styled(Column)`
  max-width: 90rem;
  margin: 0 auto;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 3.2rem;
`

export const TypesContainer = styled(Row)`
  padding: 1rem 0 2rem 0;
`

export const Type = styled.button`
  border-radius: 0;
  border: .4rem solid ${Colors.PUERTO_RICO};
  color: ${Colors.PUERTO_RICO};
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  height: 5rem;
  letter-spacing: .2rem;
  margin: 2rem;
  text-transform: uppercase;
  width: 20rem;
  outline: none;

  ${props => props.active && css`
    background-color: ${Colors.PUERTO_RICO};
    color: ${Colors.WHITE};
  `}
`

export const SelectedTypeContainer = styled(Row)`
  margin: 1rem 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transform: translate3d(-50px,0,0);
  position: absolute;
  top: 0;

  ${props => props.orientation === 'horizontal' && css`
    flex-direction: column;
  `}

  ${props => props.active && css`
    opacity: 1;
    visibility: visible;
    transition: .3s;
    position: relative;
    top: auto;
    transform: translate3d(0px,0,0);
  `}
`

export const SelectedTypeImageContainer = styled.div`
  flex: 1;
  position: relative;
  margin-right: 4rem;
  display: flex;
  justify-content: flex-end;

  ${props => props.orientation === 'horizontal' && css`
    justify-content: center;
  `}
`

export const SelectedTypeImage = styled.img``

export const SelectedTypeImageText = styled.div`
  position: absolute;
  bottom: 5rem;
  right: -1rem;
  background-color: ${Colors.RED_ORANGE};
  color: ${Colors.WHITE};
  font-size: 3rem;
  padding: .5rem 6.5rem;
  text-transform: uppercase;

  ${props => props.orientation === 'horizontal' && css`
      bottom: -2.5rem;
      right: unset;
  `}
`

export const SelectedTypeDescriptionContainer = styled(Column)`
  flex: 1;

  ${props => props.orientation === 'horizontal' && css`
    flex-direction: row;
    margin-top: 2rem;
  `}
`

export const SelectedTypeDescription = styled.div``

export const SelectedTypeDescriptionTitle = styled.h2`
  color: ${Colors.PUERTO_RICO};
  letter-spacing: .1rem;
  font-size: 2.4rem;
`

export const SelectedTypeDescriptionText = styled.p`
  color: ${Colors.LGITH_BLACK};
  font-family: monospace;
  font-size: 2.5rem;
  margin-bottom: 4rem;
`
