import { Container, SectionAnchor, SectionContainer, SelectedTypeContainer, SelectedTypeDescription, SelectedTypeDescriptionContainer, SelectedTypeDescriptionText, SelectedTypeDescriptionTitle, SelectedTypeImage, SelectedTypeImageContainer, SelectedTypeImageText, Title, Type, TypesContainer } from './styles'
import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Section = ({
  name,
  title,
  types,
  odd
}) => {
  const [selectedType, setSelectedType] = useState(0)
  const orientation = odd ? 'horizontal' : 'vertical'

  const onClickType = (index) => {
    setSelectedType(index)
  }

  return (
    <SectionContainer odd={odd}>
      <SectionAnchor id={name} />
      <Container>
        <Title>
          { title }
        </Title>
        <TypesContainer>
          {types.map(({ name }, index) => (
            <Type
              key={name}
              active={selectedType === index}
              onClick={() => onClickType(index)}
            >
              { name }
            </Type>
          ))}
        </TypesContainer>
        { types.map(({ img, name, habitat, characteristics }, index) => (
          <SelectedTypeContainer orientation={orientation} key={name} active={selectedType === index}>
            <SelectedTypeImageContainer orientation={orientation}>
              <SelectedTypeImage src={img} />
              <SelectedTypeImageText orientation={orientation}>
                { name }
              </SelectedTypeImageText>
            </SelectedTypeImageContainer>
            <SelectedTypeDescriptionContainer orientation={orientation}>
              <SelectedTypeDescription>
                <SelectedTypeDescriptionTitle>
              Características
                </SelectedTypeDescriptionTitle>
                <SelectedTypeDescriptionText>
                  { characteristics }
                </SelectedTypeDescriptionText>
              </SelectedTypeDescription>
              <SelectedTypeDescription>
                <SelectedTypeDescriptionTitle>
              Habitat
                </SelectedTypeDescriptionTitle>
                <SelectedTypeDescriptionText>
                  { habitat }
                </SelectedTypeDescriptionText>
              </SelectedTypeDescription>
            </SelectedTypeDescriptionContainer>
          </SelectedTypeContainer>
        )) }
      </Container>
    </SectionContainer>
  )
}

Section.propTypes = {
  odd: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    characteristics: PropTypes.string.isRequired,
    habitat: PropTypes.string.isRequired
  }))
}

export default Section
