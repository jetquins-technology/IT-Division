import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App