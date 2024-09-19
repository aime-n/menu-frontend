import React, { useState, useRef, useEffect } from 'react';
import { AiOutlinePicture, AiOutlineCamera, AiOutlineEdit, AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';
import './BottomNavBar.css'; // Ensure you have appropriate styles
import { useNavigate } from 'react-router-dom';

function BottomNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      if (menuRef.current) {
        menuRef.current.focus();
      }
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Handle navigation when Home is clicked
  const handleHomeClick = () => {
    navigate('/');
  };

  // Handle navigation when Profile is clicked
  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleTakePhoto = () => {
    // Logic to take a photo using the device camera
    navigate('/take-photo'); // Example route
    setMenuOpen(false);
  };

  const handleWriteRecipe = () => {
    // Logic to write a new recipe
    navigate('/write-recipe'); // Example route
    setMenuOpen(false);
  };

  const handleSelectPhoto = () => {
    fileInputRef.current.click();
    setMenuOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result;
        navigate('/photo-preview', { state: { imageDataUrl } });
      };
      reader.readAsDataURL(file);
    }
  };

  // ... (other handlers like handleTakePhoto, handleTypeRecipe if needed)

  return (
    <>
      <div className="bottom-nav-bar">
        <button
          className="nav-button"
          aria-label="Home"
          onClick={handleHomeClick}
        >
          <AiOutlineHome size={30} />
        </button>

        <div className="center-button-container">
          <button
            className="nav-button plus-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-label="Open Menu"
          >
            <AiOutlinePlus size={30} />
          </button>

          {menuOpen && (
            <div
              className="menu"
              ref={menuRef}
              tabIndex="-1"
              role="menu"
              aria-label="Main Menu"
            >
              {/* Selecionar Foto */}
              <button
                className="menu-option"
                role="menuitem"
                onClick={handleSelectPhoto}
              >
                <AiOutlinePicture className="menu-icon" />
                Selecionar foto
              </button>

              {/* Tirar Foto */}
              <button
                className="menu-option"
                role="menuitem"
                onClick={handleTakePhoto}
              >
                <AiOutlineCamera className="menu-icon" />
                Tirar foto
              </button>

              {/* Escrever Receita */}
              <button
                className="menu-option"
                role="menuitem"
                onClick={handleWriteRecipe}
              >
                <AiOutlineEdit className="menu-icon" />
                Escrever receita
              </button>
            </div>
          )}
        </div>

        <button
          className="nav-button"
          aria-label="Profile"
          onClick={handleProfileClick}
        >
          <AiOutlineUser size={30} />
        </button>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
}

export default BottomNavBar;