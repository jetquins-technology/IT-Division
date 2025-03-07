import React from 'react'

import { Outlet } from 'react-router-dom'

import MegaMenu from '../components/MegaMenu'
import Footer from '../components/Footer'


function HomeLayout() {
  return (
    <div>
        <MegaMenu />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout