import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate('/')}>Skill Swap</h1>
      <div className="user-icon" onClick={() => navigate('/profile')}>
        <img src="/user-icon.png" alt="Profile" />
      </div>
    </header>
  );
}
