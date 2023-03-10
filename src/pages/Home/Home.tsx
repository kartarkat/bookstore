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
  const { books, setBooks } = useContext<{
    books: Books;
    setBooks: React.Dispatch<React.SetStateAction<Books>>;
  }>(BooksDataContext);

  const handleInputSubmit = async(query: string) => {
    if(query)setBooks(await fetchBooks(query))
  }
  
  return (
    <div className={styles.homeContainer}>
      <PageHeader 
      setBooks={setBooks} 
      children={<SearchInput handleSubmit={handleInputSubmit}/>}
      />
      <div className={styles.bookSection}>
        {books.items.length > 1 ?
          books.items.map(book => <RenderBook key={book.id} book={book} />)
          :
          <div className={styles.loaderContainer}>
            <img className={styles.loader} src={images.loader} alt='loader' />
          </div>
        }
      </div>

    </div>
  )
}

export default Home