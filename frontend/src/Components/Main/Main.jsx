import React from 'react'
import About from './About'
import Carousel from './Carousel'
import Stack from './Stack'
import Projects from './Projects'
import Contact from './Contact'
import Cards from './Cards'


function Main() {
  return (
    <div>
      <section id="home">
        <Carousel />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="cards">
        <Cards />
      </section>
      <section id="stack">
        <Stack />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Main