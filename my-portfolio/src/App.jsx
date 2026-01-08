import { NavBar } from './components/header';
import { HeroPage } from './pages/hero/HeroPage';
import { ProjectPage } from './pages/project/ProjectPage';
import { AboutPage } from './pages/about/AboutPage';
import { SkillsComponent } from './components/skills/SkillsComponent';
import { ExpComponent } from './components/experience/ExpComponent';
import { ContactComp } from './components/contact/ContactComp';
import { SmoothScroll } from './components/SmoothScroll';
import { useState } from "react";
import { LoaderScreen } from './components/LoaderScreen';
import './App.css'

function App() {

  const [loaded, setLoaded] = useState(false);

  return (
    <>
     {!loaded && <LoaderScreen onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
    <SmoothScroll>
      <NavBar />
      <HeroPage />
      <ProjectPage />
      <AboutPage />
      <SkillsComponent />
      <ExpComponent />
      <ContactComp />
    </SmoothScroll>
    </>
    )}
    </>
  )
}

export default App
