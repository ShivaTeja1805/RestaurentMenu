import React from 'react'
import Navbar from './Components/Navbar'
import Tables from './Components/Tables'
import Filter from './Components/Filter'
import Card from './Components/Card'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Tables />
        <Filter />
        <Card />
    </div>
  )
}

export default Home
