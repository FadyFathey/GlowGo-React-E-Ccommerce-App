import React from 'react'
import cat1 from '../../common/images/category/cat-1.png'
import cat2 from '../../common/images/category/cat-2.png'
import cat3 from '../../common/images/category/cat-3.png'
import './shop.css'
const Catg = () => {
    const data = [
        {
            cateImg: cat1,
            cateName: "Apple",
        },
        {
            cateImg: cat2,
            cateName: "Samasung",
        },
        {
            cateImg: cat1,
            cateName: "Oppo",
        },
        {
            cateImg: cat2,
            cateName: "Vivo",
        },
        {
            cateImg: cat1,
            cateName: "Redimi",
        },
        {
            cateImg: cat2,
            cateName: "Sony",
        },
    ]
    return (
        <>
            <div className='category'>
                <div className='chead d_flex'>
                    <h1>Brands </h1>
                    <h1>Shops </h1>
                </div>
                {data.map((value, index) => {
                    return (
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='' />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })}
                <div className='box box2'>
                    <button>View All Brands</button>
                </div>
            </div>
        </>
    )
}

export default Catg