import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Alert from "./Alert";
import AuthRoute from "./AuthRoute";
import CartPage from "./Cart/CartPage";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import ProductListPage from "./Component/ProductListPage/ProductListPage";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetails";
import { AlertProvider } from "./provider/AlertProvider";
import CartProvider from "./provider/CartProvider";
import UserProvider from "./provider/UserProvider";
import SignUp from "./Login/SignUp";
import UserRoute from "./UserRoute";
import LoginPage from "./Login/LoginPage";

function App() {
  return (
    <div className="  bg-gray-100 h-screen overflow-scroll flex flex-col">
      {" "}
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Alert />
            <NavBar />
            <div className="grow">
              <Routes>
                <Route
                  index
                  element={
                    <UserRoute>
                      <ProductListPage />
                    </UserRoute>
                  }
                ></Route>

                <Route
                  path="/products/:id/"
                  element={<ProductDetail />}
                ></Route>

                <Route path="*" element={<NotFound />}></Route>

                <Route
                  path="/login/"
                  element={<AuthRoute>{<LoginPage />}</AuthRoute>}
                ></Route>

                <Route
                  path="/signup"
                  element={
                    <AuthRoute>
                      <SignUp />
                    </AuthRoute>
                  }
                ></Route>
                {/* <Route path="/forgetpass/" element={<ForgetPass />}></Route>
                <Route path="/cart" element={<CartPage />}></Route> */}
              </Routes>
            </div>
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
