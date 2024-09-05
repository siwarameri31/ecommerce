import React from 'react';
import Navbar from './Navbar.jsx';
import Affiche from './Affiche';
import { Link } from 'react-router-dom';
import './Home.css';
import CategoryDropdown from './CategoryDropdown.jsx';

const Home = ({ data, handleSearch, categories, onCategorySelect, addToCart }) => {
  const titleStyle = {
    textAlign: 'center',
    margin: '40px 0',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#444',
    padding: '10px 120px',
    borderBottom: '2px solid #0056b3',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textTransform: 'uppercase',
    letterSpacing: '0.1px',
    fontFamily: 'Georgia, serif',
    display: 'inline-block',
    maxWidth: '180%',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.8'
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <Affiche />
      <h2 style={titleStyle}>
        Discover our exclusive collection for an elegant and modest style
      </h2>
      <CategoryDropdown categories={categories} onCategorySelect={onCategorySelect} />
      <ul className="card-container">
        {data.map(item => (
          <li key={item.id} className="card">
            <Link to={`/productdetail/${item.id}`} className="card-link">
              <img src={item.imageUrl} alt={item.name} />
              <div className="card-content">
                <p className="card-title">{item.name}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
