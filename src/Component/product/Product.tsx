import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ProductProps } from "../../module/Madule";

const Product: FC<ProductProps> = ({
  title,
  price,
  thumbnail,
  category,
  id,
}) => {
  return (
    <div className=" border  p-2 shadow-lg">
      <div className=" w-full aspect-square">
        <img className=" w-full h-full object-cover" src={thumbnail} />
      </div>
      <h3 className="text-gray-500 text-2xl  mt-4">{category}</h3>
      <h3 className="text-bold text-xl mt-2">{title}</h3>
      <div className="flex">
        <img
          className="w-7 h-7 mt-2"
          src="https://img.icons8.com/color/48/000000/star--v1.png"
        />
        <img
          className="w-7 h-7 mt-2"
          src="https://img.icons8.com/color/48/000000/star--v1.png"
        />
        <img
          className="w-7 h-7 mt-2"
          src="https://img.icons8.com/color/48/000000/star--v1.png"
        />
        <img
          className="w-7 h-7 mt-2"
          src="https://img.icons8.com/color/48/000000/star--v1.png"
        />
      </div>

      <div className="sm:flex justify-between sm:mt-4 mx-2  ">
        <div>
          <h3 className="text-2xl ">$: {price}</h3>
        </div>
        <div className="mt-6 py-2 sm:p-0 sm:mt-0">
          <Link
            to={"/Products/" + id}
            className=" p-3  rounded-md bg-orange-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
// <Link to={"/Products/" + id} className=" p-3   rounded-md bg-orange-500">
//   {" "}
//   View Details
// </Link>;
