import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Orders' element={<Orders />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
