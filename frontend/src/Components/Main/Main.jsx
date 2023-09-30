import React from 'react';
import About from './About';
import Carousel from './Carousel';
import Stack from './Stack';
import Projects from './Projects';
import Contact from './Contact';
import Cards from './Cards';

const sections = [
  { id: 'home', component: Carousel },
  { id: 'about', component: About },
  { id: 'cards', component: Cards },
  { id: 'stack', component: Stack },
  { id: 'projects', component: Projects },
  { id: 'contact', component: Contact },
];

function Main() {
  return (
    <div>
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <section.component />
        </section>
      ))}
    </div>
  );
}

export default Main;
