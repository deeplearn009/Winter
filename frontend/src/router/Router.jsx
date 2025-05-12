import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import Admin from '../pages/admin/Admin'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
            </Route>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/admin' element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
