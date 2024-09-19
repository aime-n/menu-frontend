import React from 'react';
import './BottomBar.css';
import { AiOutlineHome, AiOutlineUser, AiOutlinePlus } from 'react-icons/ai'; // Import icons from React Icons

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <button className="icon-button">
        <AiOutlineHome size={30} />
      </button>
      <button className="icon-button center-button">
        <AiOutlinePlus size={30} />
      </button>
      <button className="icon-button">
        <AiOutlineUser size={30} />
      </button>
    </div>
  );
};

export default BottomBar;