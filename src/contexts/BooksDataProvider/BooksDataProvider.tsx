import React, { createContext, useCallback, useEffect, useState} from 'react'
import { fetchAllBooks } from '../../utils/api';

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
  const [searchIndex, setSearchIndex] = useState(0)
  const [query, setQuery] = useState('anime')

  const value = { books, setBooks, currentBook, setCurrentBook, 
                  loader, setLoader, searchIndex, setSearchIndex,
                  query, setQuery }

  const getBooksData = useCallback(async() => {
    if(query){
      try {
        setLoader(true);
        const res = await fetchAllBooks(query, searchIndex);
        const response = res?.items ? {...res, booksFound: true} : {...res, items: [], booksFound: false}
        setBooks(response);
      } catch (error) {
        throw new Error("Error occurred while fetching data.");
      } finally {
        setLoader(false);
      }
    }
  },[query, searchIndex])

  useEffect(()=>{
    getBooksData()
  },[searchIndex, query, getBooksData])

  return (
    <BooksDataContext.Provider value={value}>
      {children}
    </BooksDataContext.Provider>
  )
}

export default BooksDataProvider