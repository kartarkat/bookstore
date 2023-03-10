import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import BookDetails from '../Pages/BookDetails'

function Router() {
  return (
          <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`book/:id`} element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router;
