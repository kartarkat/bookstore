import React, { useEffect, useState } from 'react'
import styles from './home.module.scss'
import PageHeader from '../../Components/PageHeader'
import RenderBook from '../../Components/RenderBook/'
import { fetchBooks } from '../../Utils/api'
import { images } from '../../assets/images'

interface Books {
  items: Item[]
}

interface Item {
  id: string;
}

const Home: React.FC = () => {

  const [books, setBooks] = useState<Books>({ items: [] });

  useEffect(() => {
    (async function () {
      setBooks(await fetchBooks("anime"))
    })()
  }, [])


  return (
    <div className={styles.homeContainer}>
      <PageHeader setBooks={setBooks} />
      {/* <div className={styles.bookSection}>
        {books.items.length > 1 ?
          books.items.map(book => <RenderBook key={book.id} book={book} />)
          : <div>{images.loader}</div>}
      </div> */}
    </div>
  )
}

export default Home