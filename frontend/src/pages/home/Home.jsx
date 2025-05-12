import React from 'react'
import WBanner from './components/welcomeBanner/wBanner'
import Categories from './components/categories/Categories'
import Arrivals from './components/arrivals/Arrivals'
import Shipping from './components/shipping/Shipping'
import Photos from './components/photos/Photos'

const Home = () => {
  return (
    <div>
      <WBanner/>
      <Categories/>
      <Arrivals/>
      <Shipping/>
      <Photos/>
    </div>
  )
}

export default Home
