import React from 'react';
import '../App.css'; 
const DownArrow = () => {
  const handleClick = () => {
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const arrowStyle = {
    width: '0',
    height: '0',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderTop: '20px solid white', 
    display: 'inline-block',
    cursor: 'pointer',
    marginTop: '100px',
    animation: 'bounce 1.5s infinite', 
    transition: 'transform 0.3s ease',
  };

  return (
    <div
      style={arrowStyle}
      onClick={handleClick}
      title="Scroll Down"
    />
  );
};

export default DownArrow;
