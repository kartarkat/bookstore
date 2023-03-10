import { createContext } from "react";

interface Item {
  id: object;
}

interface Books {
  items: Item[];
}

const initialBookData = {
  books: { items: [] },
  setBooks: () => {},
};

export const BooksDataContext = createContext<{
  books: Books;
  setBooks: React.Dispatch<React.SetStateAction<Books>>;
}>(initialBookData);

