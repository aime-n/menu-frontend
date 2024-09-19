// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'; // Import the Header component
import BottomNavBar from './components/BottomNavBar';
import PhotoPreview from './components/PhotoPreview';
import Home from './Home';
import Profile from './Profile';
import RecipePostPage from './components/RecipePostPage';

import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/photo-preview" element={<PhotoPreview />} />
            <Route path="/next-page" element={<RecipePostPage />} />
            {/* ... other routes ... */}
          </Routes>
        </div>

        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;