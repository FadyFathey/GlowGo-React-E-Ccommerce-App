import React from "react";
import Header from "./common/header/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pages from "./pages/pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./component/cart/cart";
import { useState } from "react";
import SData from "./component/shop/sdData";
import Footer from "./common/footer/footer";

const App = () => {
  const [cartItem, setcartItem] = useState([]); // Initialize with an empty array
  const shopItems = SData()
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setcartItem(
        cartItem.map((item) =>
          item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item
        )
      );
    } else {
      setcartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {

    const productExit = cartItem.find((item) => item.id === product.id)


    if (productExit.qty === 1) {
      setcartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setcartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <Router>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path="/" exact element={<Pages addToCart={addToCart} shopItems={shopItems} />} />
        <Route path="/cart" element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
