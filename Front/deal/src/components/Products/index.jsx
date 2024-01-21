import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Products = () => {
    const [data, setData] = useState([])
    const {addBasket} = useContext(BasketContext)
    const { addWishlist, checkWishlist} = useContext(WishlistContext)

    useEffect(() => {
        fetch('http://localhost:7000/')
            .then((res) => res.json())
            .then((api) => setData(api))

    }, [])

    return (
        <div className='product'>
            <div className="cards">
                {data.map(item => (
                    <div className="card" key={item._id}>
                        <Link to={`/${item._id}`}><i className="eye fa-regular fa-eye"></i></Link>
                        <i className={`heart ${checkWishlist(item) ? "fa-solid fa-heart" : " fa-regular fa-heart"}`}  onClick={()=>addWishlist(item)}></i>
                        <img src={item.img} alt="" />
                        <div className="write">
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                            <h2>$ {item.price}</h2>
                        </div>
                        <button onClick={()=>addBasket(item)}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products