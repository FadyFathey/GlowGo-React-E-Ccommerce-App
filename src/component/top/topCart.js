import React from 'react'
import TopData from './topData'
import Slider from "react-slick";
const TopCart = () => {
    const data = TopData()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider {...settings}>
                {data.map((val, index) => {
                    return (
                        <div key={index} className="box product">
                            <div className="nametop d_flex ">
                                <div className="tleft">{val.para}</div>
                                <div className="tright">{val.desc}</div>
                            </div>
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>

    )
}

export default TopCart