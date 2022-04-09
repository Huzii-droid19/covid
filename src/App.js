import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./layouts/auth/Login";
import LandingPage from "./layouts/LandingPage";
import Main from "./Main";
import Signup from "./layouts/auth/Signup";

function App() {
  const user_login = localStorage.getItem("user-login");
  return (
    <Router>
      <div className="app">
        <Routes>
          {user_login ? (
            <Route path="/main/*" element={<Main />} />
          ) : (
            <Route path="login" element={<Login />} />
          )}
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="/main/*" element={<Main />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
