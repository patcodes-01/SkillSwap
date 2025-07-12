import React from 'react';
import './SearchBar.css';

export default function SearchBar() 
{
  return (
    <div className="search-bar">
      <input placeholder="Search by skill (e.g., Photoshop)" />
      <select>
        <option>Sort by</option>
        <option>Name</option>
        <option>Rating</option>
      </select>
    </div>
  );
}
