import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import CreateProduct from './components/CreateProduct';
import Affiche from './components/Affiche';
import CategoryDropdown from './components/CategoryDropdown';
import Cart from './components/Cart.jsx'; 
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts();
        await fetchCategories();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products/get");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const handlePost = async (body) => {
    try {
      const response = await axios.post("http://localhost:5000/products/post", body);
      console.log("Product created:", response.data);
      await fetchProducts(); // Refetch products after creating a new one
    } catch (error) {
      console.error("Error posting products:", error);
    }
  };

  const handleSearch = (term, e) => {
    e.preventDefault();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/categories/get");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };

  const onCategorySelect = (selectedCategory) => {
    const filtered = products.filter((product) =>
      product.CategoryId === Number(selectedCategory)
    );
    setFilteredProducts(filtered);
  };


  // const removeFromCart = (productId) => {
  //   setCart(cart.filter(item => item.id !== productId));
  // }


  return (
    <Router>
      <Navbar handleSearch={handleSearch} />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home data={filteredProducts} handleSearch={handleSearch} categories={categories} onCategorySelect={onCategorySelect} />} />
        <Route path="/productdetail/:id" element={<ProductDetail  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create" element={<CreateProduct handlePost={handlePost} categories={categories} />} />
        <Route path="/affiche" element={<Affiche />} />
        <Route path="/cart" element={<Cart cart={cart}  />} /> 
      </Routes>
    </Router>
  );
};

export default App;
