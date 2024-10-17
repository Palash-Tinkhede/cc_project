// import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>Categories</h1>
      <ul>
        <li><Link to="/action">Action</Link></li>
        <li><Link to="/adventure">Adventure</Link></li>
        <li><Link to="/racing">Racing</Link></li>
        <li><Link to="/puzzle">Puzzle</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
