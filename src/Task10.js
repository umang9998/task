import React, { useState } from 'react';

function Task10() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', quantity: 1 },
    { id: 2, name: 'Item 2', quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item  
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => increaseQuantity(item.id)} style={{marginLeft:"5px", backgroundColor:"red"}}>+</button>
              <button onClick={() => decreaseQuantity(item.id)} style={{marginLeft:"5px" , backgroundColor:"green"}}>-</button>
              <button onClick={() => removeItem(item.id)} style={{marginLeft:"5px" , backgroundColor:"magenta"}}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Task10;
