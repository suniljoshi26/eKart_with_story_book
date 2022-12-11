import React, { ChangeEvent, useEffect, useState } from "react";

import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";
import { getProductList } from "../../api";
import ProductList from "../ProductList/ProductList";
import Loading from "../../Loading";
import { ProductDataType } from "../../module/Madule";
function ProductListPage() {
  // const [query, setQuery] = useState("");
  const [productList, setProductList] = useState<ProductDataType>({});
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { data, meta } = productList;

  let { sort, search, page } = params;
  let pageNum = +page;
  sort = sort || "default";
  search = search || "";
  pageNum = +page || 1;

  useEffect(() => {
    let sortBy: string | undefined;
    let sortType: string | undefined;

    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "price") {
      sortBy = "price";
    } else if (sort == "priceH2L") {
      sortBy = "price";
      sortType = "desc";
    }
    getProductList({ sortBy, sortType, search, pageNum }).then((response) => {
      console.log("y", response.data);
      setProductList(response);
      setLoading(false);
    });
  }, [sort, search, pageNum]);

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchParams(
      { ...params, search: event.target.value, page: "1" },
      { replace: false }
    );
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-2 max-w-6xl mx-auto bg-white sm:px-9  px-3 py-32 ">
      <input
        placeholder="search"
        className="border border-gray-500 rounded-md mb-2
          p-2"
        onChange={handleQueryChange}
        value={search}
      />
      <select
        className="border border-gray-500 rounded-lg p-2  mb-2 px-10"
        onChange={handleSortChange}
        value={sort}
      >
        <option value="default"> default sort</option>
        <option value="title"> sort by name</option>
        <option value="price"> sort by price:high to low </option>

        <option value="priceH2L"> sort by price:low to high</option>
      </select>
      {data.length > 0 && <ProductList product={data} />}{" "}
      {/* {productList.data.length == 0 && <NoMatchingFound />} */}
      {range(1, meta.last_page + 1).map((pageNo) => (
        <Link
          key={pageNo}
          to={"?" + new URLSearchParams({ ...params, page: pageNo.toString() })}
          className={
            "p-2  mr-1  " +
            (pageNo === pageNum ? "bg-orange-600" : " border border-orange-500")
          }
        >
          {pageNo}
        </Link>
      ))}
    </div>
  );
}
export default ProductListPage;
