import logo from './logo.svg';
import './App.css';
// import Users from './components/user/Users';
import Login from './components/user/Login';
import SignUp from './components/user/SignUp'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/user/NavBar.';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import Profile from './components/user/Profile';
import Userauth from './components/auth/Userauth';
import EditProfile from './components/user/EditProfile';

function App() {
  return (
   
   <BrowserRouter>
    <Userauth>
      <Routes>
        <Route exact path='/signin' element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        
      
          <Route exact path="/" element={<Profile/>}/>
          <Route exact path ="/edit/:userId" element={<EditProfile/>}/>
       
            
         
       
      </Routes>
       </Userauth>
   </BrowserRouter>
  
  );
}

export default App;
