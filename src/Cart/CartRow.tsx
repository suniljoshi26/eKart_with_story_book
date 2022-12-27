import { FC, ChangeEvent } from "react";
import { ImCross } from "react-icons/im";
type cartarowProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
  quantity: number;
  onQuantityChange: Function;
  onRemove: Function;
};
const CartRow: FC<cartarowProps> = ({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  console.log("product title ", product.title);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQuantityChange(product.id, +event.target.value);
  };
  const handleCrossClick = () => {
    onRemove(product.id);
  };
  return (
    <div>
      <div className=" hidden md:block">
        <div className="flex flex-row items-center space-x-4 px-4 py-4 border border-gray-300 bg-white  ">
          <span className="w-10  h-10 flex items-center">
            <button onClick={handleCrossClick}>
              <ImCross />
            </button>
          </span>
          <div className="w-10 h-10 object-cover">
            <img className="w-full h-full" src={product.thumbnail} />
          </div>
          <div className="grow text-red-600 font-bold ">{product.title}</div>
          <h3 className="w-20  font-bold text-gray-700">${product.price}</h3>
          <div className="w-32 font-bold text-gray-700">
            <input
              type="number"
              className="w-12 h-10 border border-gray-600 mx-2  p-1  rounded-md"
              value={quantity}
              onChange={handleChange}
            />
          </div>
          <span className="w-20 font-bold text-gray-700">
            {product.price * quantity}
          </span>{" "}
        </div>
      </div>
      <div className=" md:hidden">
        <div className="border border-gray-300 px-2 py-3 text-end">
          <button onClick={handleCrossClick}>
            <ImCross />
          </button>
        </div>
        <div className="flex justify-between border border-gray-300   px-2 py-3">
          <h3>Product</h3>
          <h3 className=" text-red-600  ml-4 ">{product.title}</h3>
        </div>
        <div className="flex justify-between border border-gray-300  px-2 py-3">
          <h1>Price</h1>
          <h3 className="  text-gray-700">${product.price}</h3>
        </div>
        <div className="flex justify-between border border-gray-300 px-2 py-3">
          <h1>Quantity</h1>
          <input
            type="number"
            className="  w-10 border border-gray-600 mx-2  p-1  rounded-md"
            value={quantity}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between border border-gray-300  px-2 py-3">
          <h1>Sub Total</h1>
          <span className=" font-bold text-gray-700">
            ${product.price * quantity}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartRow;
