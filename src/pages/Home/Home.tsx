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
}

const Home: React.FC = () => {
  const { books, loader } = useContext<{
    loader: boolean;
    books: Books;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  }>(BooksDataContext);

  return (
    <div className={styles.homeContainer}>
      <PageHeader
        children={<SearchInput />}
      />
      <div className={styles.bookSection}>
        {loader ? <Loader /> :
          <> {books?.items.length > 1 ?
            books.items.map(book => <RenderBook key={book.id} book={book} />)
            : ''}
            <Pagination />
          </>
        }
      </div>

    </div>
  )
}

export default Home