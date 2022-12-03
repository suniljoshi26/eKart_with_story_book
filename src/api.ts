import axios from "axios";

export const getProductdata = () => {
  axios.get("https://myeasykart.codeyogi.io/products").then((res) => {
    console.log(res);
  });
};
