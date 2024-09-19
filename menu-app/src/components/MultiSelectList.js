import React from 'react';
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';
import './MultiSelectList.css';

function MultiSelectList({ items, selectedItems, setSelectedItems }) {
  const handleItemChange = (item) => {
    if (selectedItems.includes(item)) {
      // Deselect the item
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      // Select the item
      setSelectedItems([...selectedItems, item]);
    }
  };

  if (items.length === 0) {
    return <div>No items found.</div>;
  }

  return (
    <div className="multi-select-list">
      {items.map((item, index) => (
        <label
          key={index}
          className={`item ${selectedItems.includes(item) ? 'selected' : ''}`}
          onClick={() => handleItemChange(item)} // Clicking the label will toggle selection
        >
          <span className="item-text">{item}</span>
          {/* Display the circle or dot based on selection state */}
          {selectedItems.includes(item) ? (
            <FaRegDotCircle className="custom-radio selected-icon" />
          ) : (
            <FaRegCircle className="custom-radio unselected-icon" />
          )}
        </label>
      ))}
    </div>
  );
}

export default MultiSelectList;