import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css';

const Navbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="navi">
      <h1>Neyssa Shop</h1>
      <div className="flex-1">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/create">Create</Link>
        {/* <Link to="/category">Categories</Link> */}
        <AiOutlineShoppingCart style={{ fontSize: '1rem' }} />

      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={(e) => handleSearch(searchTerm, e)} className="btn_search">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
