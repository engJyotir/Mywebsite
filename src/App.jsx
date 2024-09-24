
import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/navbar/navbar"
function App() {
  

  return (
   <div className = {styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About/>
   </div>
  )
}

export default App
