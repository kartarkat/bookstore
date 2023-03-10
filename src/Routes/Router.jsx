import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import BookDetails from '../pages/BookDetails'
import BooksDataProvider from '../contexts/BooksDataProvider';

function Router() {
  return (
    <BooksDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`book/:id`} element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </BooksDataProvider>
  )
}

export default Router;
