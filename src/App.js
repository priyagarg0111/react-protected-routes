import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Docs from './components/Docs';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Button from './components/Button';
import ProtectedRoute from './components/ProtectedRoute';
import './style.css';
import './components/navbar.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const loggedIn = () => {
    setIsLoggedIn(true);
  };

  const loggedOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/docs"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Docs />
              </ProtectedRoute>
            }
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {isLoggedIn ? (
          <Button handleClick={loggedOut} buttonText="Logout" />
        ) : (
          <Button handleClick={loggedIn} buttonText="Login" />
        )}
      </Router>
    </React.Fragment>
  );
};

export default App;
