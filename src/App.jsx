
import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/navbar/navbar"
import { Projects } from "./components/Projects/Project"
function App() {
  

  return (
   <div className = {styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About/>
    <Experience/>
    
    <Contact/>
   </div>
  )
}

export default App
