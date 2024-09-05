import React from 'react';
import './Cart.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> :
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <h2>{item.name} (x{item.quantity})</h2>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Cart;
