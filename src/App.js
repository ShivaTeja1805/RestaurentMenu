import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import PageNotFound from './PageNotFound';


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Orders' element={<Orders />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
