import './App.css';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found</h2>
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
