/*
 * @copyright 2024 Denzel Navarro
 * @license Apache-2.0
*/

// Node Modules
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// GSAP Plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { element } from 'prop-types';

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })
  })

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
