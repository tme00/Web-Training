import"./App.css";

import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Error from "./Pages/Error";




function App() {
  return (
      <Router>
        <nav> {/*Navbar, tabs*/}
        <Link to = "/" > Home </Link>
        <Link to = "/about"> About </Link>
        <Link to = "/profile"> Profile </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element = {<About/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
          <Route path="*" element={<Error/>}></Route> {/*Error page redirection*/}
        </Routes>
        <div> Footer </div>
      </Router>
  );
}

export default App;
