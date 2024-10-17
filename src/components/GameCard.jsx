/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

function GameCard({ game }) {
  return (
    <Link to={game.link}><div className="game-card">
     <button> <img src={game.image} alt={game.title} className="game-image" /></button>
      <h3 className='title'>{game.title}</h3>
      {/* <p>{game.category}</p>
      <button className="play-button">Play Now</button> */}
    </div>
    </Link>
  );
}

export default GameCard;
