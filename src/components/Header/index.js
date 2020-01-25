import { Container, Logo, NavBar, NavItem } from './styles'
import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Header = ({ title, navItems }) => {
  const [activeNav, setActiveNav] = useState(0)

  const onNavClick = (index) => {
    setActiveNav(index)
  }

  return (
    <Container>
      <Logo href="/">
        { title }
      </Logo>
      <NavBar>
        {
          navItems.map(({ title, href }, index) => (
            <NavItem
              key={title}
              href={href}
              onClick={() => onNavClick(index)}
              active={activeNav === index}
            >
              { title }
            </NavItem>
          ))
        }
      </NavBar>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }))
}

Header.defaultProps = {
  title: 'Nature',
  navItems: [
    { title: 'Animais', href: '#animais' },
    { title: 'Florestas', href: '#florestas' },
    { title: 'Montanhas', href: '#montanhas' }
  ]
}

export default Header
