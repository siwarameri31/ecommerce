import React, { useState } from "react";
import "./CreateProduct.css"
import { useNavigate } from "react-router-dom";

const CreateProduct = ({  handlePost,categories }) => {

const navigate=useNavigate()

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [options, setOptions] = useState('');
  const [CategoryId, setCategoryId] = useState(''); 
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    

    setError('');

    const newProduct = {
      name,
      imageUrl,
      price,
      quantity,
      options,
      CategoryId ,
      AdminId:1
    };

    
    handlePost(newProduct)                


    setName('');
    setImageUrl('');
    setPrice('');
    setQuantity('');
    setOptions('');
    setCategoryId('');
    navigate("/home")

  };

  return (
    <div>
      <h2>Create New Product</h2>
      {error && <p className="error">{error}</p>} 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
        </div>
        <div>
          <label>Options:</label>
          <input
            type="text"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
            placeholder="Options"
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={CategoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
