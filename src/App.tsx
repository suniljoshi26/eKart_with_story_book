import { useState } from "react";
import Button from "./Button";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/product/Product";

function App() {
  const [count, setCount] = useState(0);

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
