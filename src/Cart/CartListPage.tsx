import React, { useEffect, useState } from "react";
import { FC } from "react";
import CartRow from "./CartRow.js";
import Input from "../Login/Input.js";
import Button from "../Button.js";
import { WithCart } from "../hoc/WithProvider";
type cartArray = {
  cart: any[];
  updateCart: Function;
};

const CartListPage: FC<cartArray> = ({ cart, updateCart }) => {
  const [quantityMap, setQuantityMap] = useState({});
  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
  useEffect(() => {
    setQuantityMap(cartToQuantityMap);
  }, [cart]);

  const handleQuantityChange = (productId: number, newValue: number) => {
    console.log("handleChange", newValue, productId);

    const newLocalCart = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newLocalCart);
  };

  const handleUpdateCart = () => {
    // const newCart = cart.map((cartItem) => ({
    //   ...cartItem,
    //   quantity: quantityMap[cartItem.product.id],
    // }));

    updateCart(quantityMap);
  };
  const handleRemove = (productId: number) => {
    console.log("product to be removed", productId);
    const newQuantityMap = cartToQuantityMap();
    console.log("before cart", cart);
    delete newQuantityMap[productId];

    console.log("after cart", cart);
    // const newCart = cart.filter((item) => {
    //   item.product.id === productId;
    // });
    updateCart(newQuantityMap);
  };
  return (
    <div>
      <div className="hidden md:block">
        <div className="     flex  space-x-4 px-4 py-2 bg-gray-200 border border-gray-400">
          <span className="ml-28 flex grow">Product</span>
          <span className="w-20">price</span>
          <span className="w-32">Quantity</span>
          <span className="w-20">Subtotal</span>
        </div>
      </div>
      {cart.map((cartItem) => {
        return (
          <CartRow
            key={cartItem.product.id}
            product={cartItem.product}
            quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        );
      })}
      <div className="sm:flex justify-between border border-gray-300 px-4 py-2 bg-white ">
        <div className="space-x-1">
          {" "}
          <div className=" flex space-x-2">
            <input />
            <Button>APPLY COUPON</Button>
          </div>
        </div>
        <div>
          <Button onClick={handleUpdateCart}>UPDATE CART </Button>
        </div>
      </div>
    </div>
  );
};
export default WithCart(CartListPage);
