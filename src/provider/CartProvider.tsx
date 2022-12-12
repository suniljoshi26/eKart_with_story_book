import React, { useEffect, useState } from "react";
import { getData, getProductByIds, saveData } from "../api";
import { CartContext } from "../context/context";
import { WithUser } from "../Hoc/WithProvider";
const CartProvider = ({ isLoggedIn, user, children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      getData().then((saveCart) => {
        setCart(saveCart);
      });
    } else {
      const savedataString = localStorage.getItem("myCart") || {};
      console.log(savedataString);
      //const saveData = JSON.parse(savedataString);
      quantityMapToCart(savedataString);
    }
  }, [isLoggedIn]);
  const quantityMapToCart = (quantityMap) => {
    getProductByIds(Object.keys(quantityMap)).then((products) => {
      const saveCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(saveCart);
    });
  };

  //  console.log("cart  is ", cart);
  function addToCart(productId, count) {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
    const oldCount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }
  function updateCart(quantityMap) {
    // setCart(newCart);

    if (isLoggedIn) {
      saveData(quantityMap).then((response) => {
        //setCart(response);
        quantityMapToCart(quantityMap);
      });
    } else {
      const cartString = JSON.stringify(quantityMap);
      localStorage.setItem("myCart", cartString);
      quantityMapToCart(quantityMap);
    }
  }
  // const cartCount = Object.keys(cart).reduce(function (output, current) {
  //   return output + cart[current];
  // }, 0);

  const cartCount = cart.reduce(function (output, current) {
    return output + current.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default WithUser(CartProvider);
