import { FC, memo } from "react";

type productProps = {};

const Product: FC<productProps> = (props) => {
  return (
    <>
      <div className="w-72 h-full">
        <div className="w-72 h-72 ">
          <img
            className="w-full h-full object-cover"
            src="https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg"
          />
        </div>{" "}
        <div className="p-2">
          <h1 className="mt-2 text-xl text-gray-500">Mugs</h1>
          <h1 className="mt-2 text-2xl">Black Printed coffee Muge </h1>
          <h3 className="mt-2 text-2xl">$15.00</h3>
        </div>
      </div>
    </>
  );
};

Product.defaultProps = {};

export default Product;
