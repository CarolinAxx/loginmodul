import {BrowserRouter as Router, 
  Route, 

  Routes} from 'react-router-dom';
import Signup from './components/signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Login app!</h1>
      <Router>

      <Routes>

        
        <Route path="/" element={<Signup/>}></Route>


        
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
