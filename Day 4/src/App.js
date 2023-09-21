import logo from './logo.svg';
import './App.css';
import './Components/Login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserLogin from './Components/Login.js';
import UserRegister from './Components/Register';
import HomePage from './Components/HomePage';
import Dashboard from './Components/Dashboard';
import EventType from './Components/EventType';
import Upcoming from './Components/Upcoming';
import Prebooked from './Components/Prebooked';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element ={<HomePage />}></Route>
     <Route path="/dashboard" element ={<Dashboard />}></Route>
     <Route path="/userlogin" element ={<UserLogin />}></Route>
     <Route path="/event-types" element={<EventType/>}></Route>
     <Route path="/usersignup" element={<UserRegister/>}></Route>
     <Route path="/prebooked" element={<Prebooked/>}></Route>
     <Route path="/upcoming" element={<Upcoming/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;