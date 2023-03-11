import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
// import BookDetails from '../pages/BookDetails'
import BooksDataProvider from '../contexts/BooksDataProvider';
import Loader from '../components/Loader';

function Router() {

  const BookDetails = lazy(() => import("../pages/BookDetails"));

  return (
    <BooksDataProvider>
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`book/:id`} element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </BooksDataProvider>
  )
}

export default Router;
