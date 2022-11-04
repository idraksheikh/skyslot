// import Navbar from './Components/navbar';
// import CollapsibleExample from './Components/navbar';
import NavBar from './Components/navbar';
import Timings from './Components/Timings';
// import Header from './Components/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './Components/HomePage';





function App() {
  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route  exact path="/" element={<HomePage/>} />
          <Route  exact path="/binman" element={<Timings/>} />
          {/* <Route  exact path="/contactus" element={<ContactUs />} /> */}
        </Routes>
      </Router>  
      
 
 
 
 
 </>

  );
}

export default App;
