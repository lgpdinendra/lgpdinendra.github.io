import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Skill from "./Components/Skill";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Work/> 
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
