import React from "react";
import FlashCard from "./flashCard";

const FlashDetails = ({ addToCart }) => {
  return (
    <section className="flash background">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt"></i>
          <h1>Deals</h1>
        </div>
        <FlashCard addToCart={addToCart} />
      </div>
    </section>
  );
};

export default FlashDetails;
