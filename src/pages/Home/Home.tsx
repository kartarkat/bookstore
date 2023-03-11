import React, { useContext } from 'react'
import styles from './home.module.scss'
import PageHeader from '../../components/PageHeader'
import RenderBook from '../../components/RenderBook/'
import { images } from '../../assets/images'
import { BooksDataContext } from '../../contexts/BooksDataProvider/'
import SearchInput from '../../components/SearchInput'
import { fetchBooks } from '../../utils/api'

interface Item {
  id: object;
}

interface Books {
  items: Item[];
}

const Home: React.FC = () => {
  const { books, setBooks, loader, setLoader } = useContext<{
    loader: boolean;
    books: Books;
    setBooks: React.Dispatch<React.SetStateAction<Books>>;
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  }>(BooksDataContext);

  const handleInputSubmit = async (query: string) => {
    if (query) {
      try {
        setLoader(true);
        const response = await fetchBooks(query);
        setBooks(response);
      } catch (error) {
        throw new Error("Error occured while fetching data");
      } finally {
        setLoader(false);
      }
    }
  }

  return (
    <div className={styles.homeContainer}>
      <PageHeader
        setBooks={setBooks}
        children={<SearchInput handleSubmit={handleInputSubmit} />}
      />

      <div className={styles.bookSection}>
        {loader ?
          <div className={styles.loaderContainer}>
            <img className={styles.loader} src={images.loader} alt='loader' />
          </div>
          :
          <> {books.items.length > 1 ?
            books.items.map(book => <RenderBook key={book.id} book={book} />)
            : ''} </>
        }
      </div>

    </div>
  )
}

export default Home