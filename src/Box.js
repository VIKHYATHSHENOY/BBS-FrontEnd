// Box.js
import React from 'react';
import './Box.css'; // Import the CSS file

const Box = ({ text }) => {
  return (
    <div className="box-container">
      <div className="oval-container">
        <span className="icon">🌟</span>
      </div>
      <p className="box-text">{text}</p>
    </div>
  );
};

export default Box;
