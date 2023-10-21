import React, { createContext, useState, useContext, useMemo } from 'react';

export const CartContext = createContext({
  cart: [],
  total: 0, // Agregamos una propiedad total
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado al carrito');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Calculamos el total sumando el precio de todos los productos en el carrito
  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};