// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import './Header.css'; // Import the corresponding CSS

const Header = () => {
  const unreadNotifications = 3; // Replace with dynamic data as needed

  return (
    <header className="header">
      {/* App Title */}
      <div className="header__title">
        <Link to="/" className="header__link">
          Culinary Club
        </Link>
      </div>



      {/* Notification Icon */}
      
    </header>
  );
};

export default Header;