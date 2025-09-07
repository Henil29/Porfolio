import Navbar from './components/navbar/Navbar.jsx';
import HeroSection from './pages/HeroSection.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Experience from './pages/Experience.jsx';
import Education from './pages/Education.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
    });

    // 2. Then stagger the menu items
    tl.from(".menu li", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
      stagger: 0.2,
    });

    // for hero section
    tl.from(".hero-main .first", {
      x: -150,
      opacity: 0,
      duration: 2,
      ease: "elastic.out(1,0.3)",
    }, "-=2")
  })

  return (
    <div className="home w-full min-h-screen">
      <Navbar/>
      <main className="w-full">
        <HeroSection className='part'/>
        <Experience className='part'/>
        <Education className='part'/>
        <Skills className='part'/>
        <Projects className='part'/>
        <Contact className='part'/>
      </main>
    </div>
  );
};

export default App;
