import React from "react";
import Home from "../component/mainpage/home";
import FlashDetails from "../component/flashDetails/flashDetails";
import TopCate from "../component/top/topCate";
import NewArrivals from "../component/newArrivals/newArrivals";
import Discount from "../component/discount/discount";
import Shop from "../component/shop/shop";
import Ann from "../component/annoucment/ann";
import Wrapper from "../component/wrapper/wrapper";

const Pages = ({ cartItem, addToCart, shopItems }) => {
  return (
    <div>
      <Home cartItem={cartItem} />
      <FlashDetails addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Ann />
      <Wrapper />
    </div>
  );
};

export default Pages;
