import React, { useContext } from 'react'
import styles from './home.module.scss'
import PageHeader from '../../components/PageHeader'
import RenderBook from '../../components/RenderBook/'
import { BooksDataContext } from '../../contexts/BooksDataProvider/'
import SearchInput from '../../components/SearchInput'
import Loader from '../../components/Loader'
import Pagination from '../../components/Pagination'

interface Item {
  id: object;
}

interface Books {
  items: Item[];
  booksFound: boolean;
}

const Home: React.FC = () => {
  const { books, loader, query } = useContext<{
    loader: boolean;
    books: Books;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  }>(BooksDataContext);

  const { items, booksFound } = books

  return (
    <div className={styles.homeContainer}>
      <PageHeader
        children={<SearchInput />}
      />
      <div className={styles.bookSection}>
        {loader ? <Loader /> :
          <>
            {items?.length > 1 ?
              items.map(book => <RenderBook key={book.id} book={book} />)
              : ''}
            {!booksFound && !loader ?
              <div className={styles.booksFound}>No books Found for "{query}", please search for different book</div>
              : <Pagination />}
          </>
        }
      </div>

    </div>
  )
}

export default Home