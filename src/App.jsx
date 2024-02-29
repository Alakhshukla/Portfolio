
import style from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Nevbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
 
  return (
    <div className={style.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    </div>
  )
}

export default App
 