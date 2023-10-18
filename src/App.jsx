import Caurousel from "./components/Caurousel"
import Explore from "./components/Explore"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Search from "./components/Search"
import Tourist from "./components/Tourist"
import Foot from "./components/Foot"


function App() {
 

  return (
    <div className=" ">
        <NavBar />
        <Hero/>
        <Explore/> 
        <Search /> 
        <Tourist/>
        <Caurousel/> 
        <Foot />  
    </div>
  )
}

export default App
