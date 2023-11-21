import React from 'react'
import DisData from './disData'
import Slider from "react-slick";
const DCart = () => {
    const data = DisData()
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <>
            <Slider {...settings}>
                {data.map((value, index) => {
                    return (
                        <>
                            <div className='box product' key={index}>
                                <div className='img'>
                                    <img src={value.cover} alt='' width='100%' />
                                </div>
                                <h4>{value.name}</h4>
                                <span>{value.price}</span>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default DCart