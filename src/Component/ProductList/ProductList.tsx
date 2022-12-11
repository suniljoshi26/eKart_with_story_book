import React, { FC } from "react";
import { ProductListProps, ProductProps } from "../../module/Madule";

import Product from "../Product/Product";

const ProductList: FC<ProductListProps> = ({ product }) => {
  return (
    <div className=" grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 space-y-2 sm:space-y-0">
      {product.map(function (item) {
        return (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            price={item.price}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
