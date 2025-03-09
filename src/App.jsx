import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Home from './pages/Home'
import SingularityMdr from './pages/services/SingularityMdr'
import VigilanceMdr from './pages/services/VigilanceMdr'
import WatchTower from './pages/services/WatchTower'
import SupportServices from './pages/services/SupportServices'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='singularity' element={<SingularityMdr/>}/>
      <Route path='vigilance' element={<VigilanceMdr/>}/>
      <Route path='watch_tower' element={<WatchTower/>}/>
      <Route path='support_service' element={<SupportServices/>}/>
      </Route>
    </Routes>
  )
}

export default App