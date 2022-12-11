import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { getProductdata } from "./api";
import Button from "./Button";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import Product from "./Component/Product/Product";
import ProductListPage from "./Component/ProductListPage/ProductListPage";
import ProductDetail from "./ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-screen">
      <NavBar />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>

          <Route path="/products/:id/" element={<ProductDetail />}></Route>
        </Routes>
      </div>
      <Footer />
      {/* <Button>Save</Button> */}
    </div>
  );
}

export default App;
