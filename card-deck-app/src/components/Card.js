import React from 'react';
import './Card.css';

const Card = ({ suit, value, onClick, isPicked }) => {
  // Determine the color based on the suit
  const suitColor = suit === '♥' || suit === '♦' ? 'red' : 'black';

  return (
    <div className={`card ${isPicked ? 'picked' : ''}`} onClick={onClick}>
      <div className="card-value" style={{ color: suitColor }}>{value}</div>
      <div className="card-suit" style={{ color: suitColor }}>{suit}</div>
    </div>
  );
};

export default Card;