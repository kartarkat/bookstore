import React, { createContext, useEffect, useState} from 'react'
import { fetchBooks } from '../../utils/api';

interface Books {
  items: Item[]
}

interface Item {
  id: string;
}

const initialBookData = {
  books: { items: [] },
  setBooks: () => {},
};

interface Props{
  children: any;
}

export const BooksDataContext = createContext<{
  books: Books;
  setBooks: React.Dispatch<React.SetStateAction<Books>>;
}>(initialBookData);

const BooksDataProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<Books>({ items: [] });
  const [currentBook, setCurrentBook] = useState(null);
  const [loader, setLoader] = useState(true)

  const value = { books, setBooks, currentBook, setCurrentBook, loader, setLoader}

  useEffect(() => {
    (async function () {
      setBooks(await fetchBooks("anime"))
    })().then(() => setLoader(false))
  }, [])

  return (
    <BooksDataContext.Provider value={value}>
      {children}
    </BooksDataContext.Provider>
  )
}

export default BooksDataProvider