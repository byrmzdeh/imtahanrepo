import React from 'react'
import SliderHome from '../../components/Slider'
import Products from '../../components/Products'
import New from '../../components/Jacket'
import Denim from '../../components/Denim'
import CardSlide from '../../components/CardSlide'
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SliderHome />
      <Products />
      <New />
      <CardSlide />
      <Denim />

    </div>
  )
}

export default Home