import { useState } from "react";
import { getProductdata } from "./api";
import Button from "./Button";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/Product/Product";

function App() {
  const [count, setCount] = useState(0);
  const a = getProductdata();
  a.then((product: string) => {
    console.log("vjhf", product.data);
  });

  return (
    <div className="">
      <NavBar />
      <Product />
      <Footer />
      <Button>Save</Button>
    </div>
  );
}

export default App;
