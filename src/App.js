import React from "react";
import "./App.css";
import Layout from "./Component/Layout";
import Home from "./Page/Home";
import ProductDetails from "./Page/ProductDetails";
import Product from "./Page/Product";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartTab from "./Component/CartTab";
import Checkout from "./Page/Checkout";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/:slug" element={<ProductDetails />} />
            <Route path="/CartTab" element={<CartTab />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
