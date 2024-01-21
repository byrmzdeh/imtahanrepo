import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import './style.scss'
import { Helmet } from 'react-helmet'


const Basket = () => {
    const { basket, addBasket, increaseCount, decreaseCount, remove } = useContext(BasketContext)

    return (
        <div className='basket'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Basket</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nav"></div>
            <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Delete</th>
                </tr>

                {basket.map(item => (
                    <tr>
                        <td><img width={80} src={item.img} alt="" /></td>
                        <td>{item.name}</td>
                        <td>$ {item.price * item.count}</td>
                        <td>
                            <i className="fa-solid fa-caret-up" onClick={() => increaseCount(item)}></i>
                            <h2>{item.count}</h2>
                            <i className="fa-solid fa-caret-down" onClick={() => decreaseCount(item)}></i>
                        </td>
                        <td><i className="fa-solid fa-trash-can" onClick={() => remove(item)} ></i></td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default Basket