import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Login from './Login.js';
import Signup from './Signup.js';
function App() {
  return (
    <div className="App">
      <Router>
   <div>
    <Route exact path="/Home" component = {Home} />
    <Route exact path="/About" component = {About} />
    <Route exact path="/Contact" component = {Contact} />
    <Route exact path="/Login" component = {Login} />
    <Route exact path="/Signup" component = {Signup} />
   </div>
   </Router>
    </div>
  );
}

export default App;
