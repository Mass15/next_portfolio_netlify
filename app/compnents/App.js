'use client'
import About from '@/app/compnents/About';
import Header from '@/app/compnents/Header';
import Intro from '@/app/compnents/Intro';
import Skills from '@/app/compnents/Skills';
import Contact from '@/app/compnents/Contact';
import Footer from '@/app/compnents/Footer';
import { useEffect } from 'react';


export default function App() {
  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry => {
        entry.target.classList.toggle('visible',entry.isIntersecting)
        });
    });
    observer.observe(document.querySelector('#skillsicon'))
    document.querySelectorAll('section').forEach(elem=>{
      observer.observe(elem)
    });
  
  },[])

  return (
    <>
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
    </>
  )
}
