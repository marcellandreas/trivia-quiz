import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Login, MainLayout, Quiz, Register, Result } from "./routers";
import Home from "./pages/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />{" "}
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path="/quiz"
              element={
                <MainLayout>
                  <Quiz />
                </MainLayout>
              }
            />
            <Route
              path="/result"
              element={
                <MainLayout>
                  <Result />
                </MainLayout>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />{" "}
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
