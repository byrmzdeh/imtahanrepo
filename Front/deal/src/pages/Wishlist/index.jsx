import React, { useContext, useState } from 'react'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'
import './style.scss'
import { Helmet } from 'react-helmet'


const Wishlist = () => {
    const { wishlist, checkWishlist, addWishlist } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)
    return (
        <div className='wishlist'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nav"></div>
            <div className="cards">
                {wishlist.map(item => (
                    <div className="card" key={item._id}>
                        <i className={`heart ${checkWishlist(item) ? "fa-solid fa-heart" : " fa-regular fa-heart"}`} onClick={() => addWishlist(item)}></i>
                        <img src={item.img} alt="" />
                        <div className="write">
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                            <h2>$ {item.price}</h2>
                        </div>
                        <button onClick={() => addBasket(item)}>ADD TO CART</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Wishlist