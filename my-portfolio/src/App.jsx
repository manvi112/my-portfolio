import { NavBar } from './components/header';
import { AboutPage } from './pages/about/AboutPage';
import { ProjectPage } from './pages/project/ProjectPage';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <AboutPage />
      <ProjectPage />
    </>
  )
}

export default App
