import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import CollapsibleExample from './Components/navbar';
import NavBar from './Components/navbar';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
 <>
<BrowserRouter>
           <Routes>
          
             <Route path='/' element={<HomePage/>}/>
             <Route path='/binman' element={<NavBar/> }/>
             
             {/* <Route path='/userLogin' element={<UserLogin/>} />
             <Route path='/otp' element={<EnterOtp/>}/>
             <Route path='/activateUser' element={<ActivateUser/>}/>
            */}
             
    
           </Routes>
           {/*<Registration/> <DregistrationS/> */}
     </BrowserRouter>
 </>
  );
}

export default App;
