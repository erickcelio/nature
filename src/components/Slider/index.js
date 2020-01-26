import { Container, Image, SlideContainer, Title } from './styles'
import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const Slider = ({ items, time }) => {
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem(activeItem => activeItem + 1 === items.length ? 0 : activeItem + 1)
    }, time)

    return () => clearInterval(interval)
  }, [items.length, time])

  return (
    <Container>
      { items.map(({ img, title }, index) => (
        <SlideContainer key={title} active={activeItem === index}>
          <Image src={img} />
          <Title>
            { title }
          </Title>
        </SlideContainer>
      )) }
    </Container>
  )
}

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })),
  time: PropTypes.number
}

Slider.defaultProps = {
  items: [
    { title: 'Animais', img: require('assets/images/slide/slide-1.jpg') },
    { title: 'Florestas', img: require('assets/images/slide/slide-2.jpg') },
    { title: 'Montanhas', img: require('assets/images/slide/slide-3.jpg') }
  ],
  time: 3000
}

export default Slider
