import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return( 
  <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
  </Router>
  )
}

export default App;
