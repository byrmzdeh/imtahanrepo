import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'
import { Helmet } from 'react-helmet'

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])

    fetch('http://localhost:7000/' + id)
        .then((res) => res.json())
        .then((api) => setDetail(api))


    return (
        <div className='detail'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nav"></div>
            <img src={detail.img} alt="" />
            <div className="write">
                <h1>{detail.name}</h1>
                <h3>{detail.desc}</h3>
                <h2>$ {detail.price}</h2>
            </div>
        </div>
    )
}

export default Detail