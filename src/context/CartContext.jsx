import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setValues((prevValues) => [
      ...prevValues,
      { id: item.id, quantity: item.quantity },
    ]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart);
    setCounter(newCart.length);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, counter, values, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
