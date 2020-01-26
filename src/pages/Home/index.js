import Header from 'components/Header'
import React from 'react'
import Section from 'components/Section'
import Slider from 'components/Slider'
import { homeData } from 'constants/data'

const Home = () => {
  const navItems = homeData.map(({ name }) => ({ title: name, href: `#${name}` }))

  return (
    <>
      <Header title={'Nature'} navItems={navItems} />
      <Slider />
      {
        homeData.map(({ title, types, name }, index) =>
          <Section
            odd={Boolean(index % 2)}
            name={name}
            key={title}
            title={title}
            types={types}
          />
        )
      }
    </>
  )
}

export default Home
