import axios from "axios";

type apiPrmsProp = {
  sortBy: string;
  search: string;
  page: number;
  sortType: string;
};
export type ProductList = {
  sortBy?: string;
  sortType?: string;
  search: string;
  pageNum: number;
};
export function getProductList({
  sortBy,
  search,
  pageNum,
  sortType,
}: ProductList) {
  let params: apiPrmsProp = {
    sortBy: "",
    search: "",
    page: 1,
    sortType: "",
  };
  if (sortBy) {
    params.sortBy = sortBy;
  }

  if (search) {
    params.search = search;
  }
  if (pageNum) {
    params.page = pageNum;
  }
  if (sortType) {
    params.sortType = sortType;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    });
}

export function getProductId(id: number) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then(function (response) {
      return response.data;
    });
}

export const getProductByIds = (ids: number[]) => {
  const commaSepeartedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepeartedIds,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const saveData = (cart: {}) => {
  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      {
        data: cart,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => {
      return response.data;
    });
};
export const getData = () => {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      return response.data;
    });
};

// import axios from "axios";
// import { FC } from "react";
// type apiprops = {};
// export const getProductdata = () => {
//   return axios
//     .get("https://myeasykart.codeyogi.io/products")
//     .then((response) => {
//       return response.data;
//     });
// };
