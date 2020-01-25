import Colors from 'styles/Colors'
import { Row } from 'styles/Common'
import styled from 'styled-components'

export const Container = styled(Row)`
  background-color: ${Colors.PUERTO_RICO};
  color: ${Colors.WHITE};
  height: 6.7rem;
  align-items: center;
  justify-content: space-between;

  a {
    text-transform: uppercase;
  }
`

export const Logo = styled.a`
  font-size: 3.2rem;
  padding: 0 2rem;
  letter-spacing: .5rem;
  font-weight: bold;
`

export const NavBar = styled(Row)`
  padding: 0 2.5rem;
`

export const NavItem = styled.a`
  padding: .5rem 2rem 0 2rem;
  font-size: 2.2rem;
  letter-spacing: .2rem;
  font-family: monospace;

  ::after {
    content: '';
    display: block;
    background: ${Colors.WHITE};
    height: .2rem;
    width: ${props => props.active ? '100%' : 0};
    transition: .3s;
  }
  
  :hover {
    ::after {
      width: 100%;
    }
  }
`
