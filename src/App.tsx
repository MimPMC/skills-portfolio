import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import './App.css';
import { ContactSection } from './components/ContactSection';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Team from './components/Team';
import { fadeIn, quickFade } from './components/animation';
import TeamMemberDetail from './components/TeamDetailPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const navRefs = {
    team: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn({ parent: '.parent', child: '.animate-text' });
      fadeIn({ parent: '.project-parent', child: '.project-child' });
      fadeIn({ parent: '.team-parent', child: '.team-child' });
      quickFade({ parent: '.skill-parent', child: '.skill-child' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header navRefs={navRefs} />
              <Hero contactRef={navRefs.contact} />
              <Team navRef={navRefs.team} />
              <Projects navRef={navRefs.projects} />
              <Skills navRef={navRefs.skills} />
              <ContactSection navRef={navRefs.contact} />
              <Footer navRefs={navRefs} />
            </>
          }
        />
        <Route
          path='/team/:id'
          element={
            <>
              <Header navRefs={navRefs} />
              <TeamMemberDetail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
