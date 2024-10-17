// import React from 'react';
import './Home.css';

function Home() {
  const games = [
    { id: 1, title: 'Futuristic Racer', image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Galaxy Wars', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Mystery Escape', image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Adventure Quest', image: 'https://via.placeholder.com/200' },
    { id: 5, title: 'Sky Defender', image: 'https://via.placeholder.com/200' },
    { id: 6, title: 'Puzzle Master', image: 'https://via.placeholder.com/200' },
  ];

  return (
    <div className="home">
      <h1>Explore Popular Games</h1>
      <div className="game-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} />
            <div className="card-info">
              <h2>{game.title}</h2>
              <button>Play Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
