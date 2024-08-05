import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Details from './Details'
import Discover from './Discover'
import Footer from './Footer'
import Slider from './Slider'
const Home = () => {

  const images = [
    'Review.png',
  ];

  const name = [
     ' Manika Gurung'
  ];

  const detail = [
    'CEO, Waiba Groups'
  ]


  return (
    <>
      <Navbar/>
      <Hero/>
      <Details/>
      <Discover/>
      <div>
      <h1 className="text-3xl font-bold text-center my-8">Customer Reviews</h1>
      <Slider images={images} name={name} detail={detail
      } />
      </div>
      <Footer/>
    </>
  )
}

export default Home
