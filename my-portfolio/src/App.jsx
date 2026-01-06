import { NavBar } from './components/header';
import { HeroPage } from './pages/hero/HeroPage';
import { ProjectPage } from './pages/project/ProjectPage';
import { AboutPage } from './pages/about/AboutPage';
import { SkillsComponent } from './components/skills/SkillsComponent';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <ProjectPage />
      <AboutPage />
      <SkillsComponent />
    </>
  )
}

export default App
