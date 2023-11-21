import React, { useState } from "react";
import FlashData from "./data";
import Slider from "react-slick";

const FlashCard = ({addToCart}) => {
const [count, setCount] = useState(0);
const data = FlashData();

const increment = () => {
    setCount(count + 1);
};

const NextArrow = (props) => {
const { onClick } = props;
return (
    <div className="control-btn" onClick={onClick}>
    <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
    </button>
    </div>
);
};

const PrevArrow = (props) => {
const { onClick } = props;
return (
    <div className="control-btn" onClick={onClick}>
    <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
    </button>
    </div>
);
};

const settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
nextArrow: <NextArrow />,
prevArrow: <PrevArrow />,
};

return (
<>
    <Slider {...settings}>
    {data.productItems.map((el) => (
        <div className="box" key={el.id}>
        <div className="product mtop">
            <div className="img">
            <span className="discount"> {el.discount} % off</span>
            <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={el.cover}
                alt=""
            />
            <div className="product-like">
                <label>0</label> <br />
                <i
                style={{ cursor: "pointer" }}
                className="fa-regular fa-heart"
                onClick={increment}
                ></i>
            </div>
            </div>
            <div className="product-details">
            <h3>{el.name}</h3>
            <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
            <div className="price">
                <h4>{el.price}.00</h4>
                <button onClick={()=> addToCart ? addToCart(el):""} >
                <i className="fa fa-plus"></i> 
                </button>
            </div>
            </div>
        </div>
        </div>
    ))}
    </Slider>
</>
);
};

export default FlashCard;
