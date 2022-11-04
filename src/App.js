// import Navbar from './Components/navbar';
// import CollapsibleExample from './Components/navbar';
import NavBar from './Components/navbar';
import Timings from './Components/Timings';
// import Header from './Components/Header';
import Contact from './Components/Contact';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Locate from './Components/Locate';
import ShowTimings from './Components/ShowTimings';
import Footer from './Components/Footer';





function App() {
  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route  exact path="/" element={<HomePage/>} />
          <Route  exact path="/binman" element={<Timings/>} />
          <Route  exact path="/contact" element={<Contact />} />
          <Route  exact path="/add-locality" element={<Locate/>} />
          <Route  exact path="/show-timing" element={<ShowTimings/>} />
        </Routes>
      <Footer/>
      </Router>  
      
 
 
 
 
 </>

  );
}

export default App;
