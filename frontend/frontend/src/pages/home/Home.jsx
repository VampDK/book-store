import React from 'react'
import Banner from './Banner'

import Recommended from './Recommended'
import TopSellers from './TopSellers'
import News from './News'



const Home = () => {
  return (
    <>
      <Banner/>
      <TopSellers/>
      <Recommended/>
      <News/>
    </>
  )
}

export default Home