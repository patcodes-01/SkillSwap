import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import AuthCard from './components/AuthCard';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {!isLoggedIn ? (
          <AuthCard onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
