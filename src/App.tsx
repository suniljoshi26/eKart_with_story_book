import { useState } from "react";
// import { getProductdata } from "./api";
import Button from "./Button";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/Product/Product";
import ProductListPage from "./Component/ProductListPage/ProductListPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavBar />
      <div>
        <ProductListPage />
      </div>
      <Footer />
      {/* <Button>Save</Button> */}
    </div>
  );
}

export default App;
