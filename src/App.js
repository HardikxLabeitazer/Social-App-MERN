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

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
