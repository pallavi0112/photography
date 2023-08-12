import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Pages/Layout'
const Routing = () => {
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>


      </Routes>
    </BrowserRouter>

  )
}

export default Routing