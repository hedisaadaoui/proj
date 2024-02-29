import React from 'react'
import Hero  from '../component/Hero/Hero'
import Navbar from '../component/navbar/Navbar'
import  NewCollections from '../component/NewCollections/NewCollections'
import  Popular  from '../component/Popular/Popular'
export default function Shop() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Popular/>
        
        <NewCollections/>
        <NewCollections/>

    </div>
  )
}
