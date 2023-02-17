import Contact from '../Components/Contact/Contact';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Projects from '../Components/Projects/Projects';
import Skills from '../Components/Skills/Skills';
import styles from './App.module.css'

const App = () => {

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </>
  )
}

export default App;
