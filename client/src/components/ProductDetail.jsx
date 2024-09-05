import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/getone/${id}`
        );
        setProduct(response.data);
        setName(response.data.name);
        setPrice(response.data.price);
        setQuantity(response.data.quantity);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Error fetching product details.");
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/products/delete/${id}`);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Error deleting product.");
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedProduct = { name, price, quantity };
      console.log("Updating product with data:", updatedProduct);

      await axios.put(
        `http://localhost:5000/products/update/${id}`,
        updatedProduct
      );

      const response = await axios.get(
        `http://localhost:5000/products/getone/${id}`
      );
      setProduct(response.data);
      setIsUpdating(false);
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Error updating product.");
    }
  };

  if (isUpdating && product) {
    return (
      <div className="product-detail-container">
        <h1>Update Product</h1>
        <form
          className="product-update-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
          }}
        >
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => setIsUpdating(false)}
          >
            Cancel
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-container">
      <div style={{display:"flex"}}>
        <div>
          <h1>{product.name}</h1>
          <img 
            src={product.imageUrl}
            alt={product.name}
            style={{
              maxWidth: "300px",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{marginTop:"150px",marginLeft:"30px"}}>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Options: {product.options}</p>
          <button onClick={() => setIsUpdating(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <div>
        {/* <h1>{product.name}</h1> */}
        <p>{product.description}</p>
      
      </div>
    </div>
  );
};

export default ProductDetail;
