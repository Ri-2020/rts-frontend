import './App_css/App.css';
import Home  from './Home/home';
import Dashboard from './Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <Router>
        <div className="App">

          <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
          </div>
  );
}

export default App;
