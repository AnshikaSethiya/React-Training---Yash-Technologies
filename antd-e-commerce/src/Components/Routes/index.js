import React from 'react'
import Home from "../../Pages/Home/Home"
import {Route, Routes} from "react-router-dom"
import Category from '../../Pages/Category/Category'

const AppRoutes = () => {
  return <Routes>
    <Route path="/" element={<Category />}/>
    <Route path="/:categoryId" element={<Category />}/>
  </Routes>
}

export default AppRoutes