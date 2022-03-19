import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./layouts/auth/Login";
import LandingPage from "./layouts/LandingPage";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
