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

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path='/signin' element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/" element={<ProtectedRoutes>
          <NavBar/>
        </ProtectedRoutes>} >

        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
