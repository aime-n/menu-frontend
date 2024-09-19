// PhotoPreview.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PhotoPreview.css';
import MultiSelectList from './MultiSelectList';

function PhotoPreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageDataUrl } = location.state || {};

  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Strawberry',
    'Grapes',
    'Mango',
    'Pineapple',
    'Blueberry',
    'Watermelon',
    'Kiwi',
    // ... more items
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  if (!imageDataUrl) {
    return <div>No image selected.</div>;
  }

  // Function to add a new item to the list
  const handleAddItem = () => {
    const trimmedTerm = searchTerm.trim();
    if (
      trimmedTerm !== '' &&
      !items.some((item) => item.toLowerCase() === trimmedTerm.toLowerCase())
    ) {
      setItems([...items, trimmedTerm]);
      setSearchTerm('');
    } else if (items.some((item) => item.toLowerCase() === trimmedTerm.toLowerCase())) {
      alert('Item already exists in the list.');
    }
  };

  const handleNext = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item.');
      return;
    }
    console.log('Selected Items:', selectedItems);
    navigate('/next-page', { state: { imageDataUrl, selectedItems } });
  };

  return (
    <div className="photo-preview-container">
      {/* Display the selected photo */}
      <img src={imageDataUrl} alt="Selected" className="selected-photo" />

      {/* Search bar and Add button */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Procurar alimentos"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="add-button" onClick={handleAddItem}>
          &#43;
        </button>
      </div>

      {/* MultiSelectList component */}
      <MultiSelectList
        items={items}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      {/* Próximo button */}
      <button className="next-button" onClick={handleNext}>
        Próximo
      </button>
    </div>
  );
}

export default PhotoPreview;