import React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipePostPage.css';

function RecipePostPage() {
  const location = useLocation();
  
  // Destructure values from location.state (safely with defaults)
  const { selectedItems = [], imageDataUrl = '' } = location.state || {};

  // If there are no selected items or the image is not present, show a message
  if (selectedItems.length === 0 || !imageDataUrl) {
    return <div>No items or image found. Please go back and try again.</div>;
  }

  return (
    <div className="next-page-container">
      {/* Display the image */}
      <div className="image-container">
        <img src={imageDataUrl} alt="Selected" className="selected-photo" />
      </div>

      {/* Display the selected items */}
      <h1>Selected Items</h1>
      <ul className="selected-items-list">
        {selectedItems.map((item, index) => (
          <li key={index} className="selected-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipePostPage;