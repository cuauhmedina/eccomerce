import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exists = isInCart(item.id);

    if (exists) {
      let newArray = cart.map((elemento) => {
        // [{1}, {}, {3}]
        if (elemento.id === item.id) {
          return { ...elemento, quantity: elemento.quantity + item.quantity };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  let data = { cart, addToCart, clearCart, deleteById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
