import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import styles from './App.module.css'

const App = () => {

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </>
  )
}

export default App;
