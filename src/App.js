import {BrowserRouter as Router, 
  Route, 
  Link,
  Routes} from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import './App.css';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Login app!</h1>
      <Router>
      <nav>
        <ul>
          <li> <Link to="/">Login</Link></li>
          <li> <Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <Routes>

        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
