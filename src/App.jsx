import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import GameGrid from './components/GameGrid';
import Sidebar from './components/SideBar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <Link to="/" className="logo">GameZone</Link>
          <h2>Only Platform For Mac Users To Play </h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>
        </header>

        <div className="main-container">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<GameGrid searchTerm={searchTerm} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
