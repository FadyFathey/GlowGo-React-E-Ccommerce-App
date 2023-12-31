import React from 'react'
import NewData from './newData'

const Cart = () => {
    const data = NewData()
    return (
        <>
            <div className='content grid product'>
                {data.map((val, index) => {
                    return (
                        <div className='box' key={index}>
                            <div className='img'>
                                <img src={val.cover} alt='' />
                            </div>
                            <h4>{val.name}</h4>
                            <span>${val.price}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cart