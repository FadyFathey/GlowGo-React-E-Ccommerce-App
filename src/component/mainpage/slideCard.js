import React from "react";
import SliderData from "../sliderData";
import Slider from "react-slick";
const SlideCard = () => {
  const data = SliderData();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((el, index) => {
          return (
            <div
              
              className="box d_flex top"
              key={index}
            >
              <div className="left">
                <h1>{el.title}</h1>
                <p>{el.desc}</p>
                <button className="btn-primary">visit collection</button>
              </div>
              <div className="right">
                <img src={el.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
