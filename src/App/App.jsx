import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Projects from '../Components/Projects/Projects';
import styles from './App.module.css'

const App = () => {

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Projects/>
      </main>
    </>
  )
}

export default App;
