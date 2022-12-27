import React, { FC, useEffect, useState } from "react";
import { getData, getProductByIds, saveData } from "../api";
import { CartContext } from "../context/Context";
import { WithUser } from "../hoc/WithProvider";
type CartProvicerProps = { isLoggedIn: boolean; children: any };
const CartProvider: FC<CartProvicerProps> = ({
  isLoggedIn,

  children,
}) => {
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
  const quantityMapToCart = (quantityMap: any) => {
    getProductByIds(Object.keys(quantityMap)).then((products) => {
      const saveCart = products.map((p: any) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(saveCart);
    });
  };

  //  console.log("cart  is ", cart);
  function addToCart(productId: number, count: number) {
    const quantityMap: any = cart.reduce(
      (m, cartItem: any) => ({
        ...m,
        [cartItem.product.id]: cartItem.quantity,
      }),
      {}
    );
    const oldCount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }
  function updateCart(quantityMap: any) {
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

  const cartCount = cart.reduce(function (output, current: any) {
    return output + current.quantity;
  }, 0);
  console.log(cartCount);
  return (
    <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default WithUser(CartProvider);
