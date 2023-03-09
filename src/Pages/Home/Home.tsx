import React, { useState } from 'react'
import styles from './home.module.scss'
import PageHeader from '../../Components/PageHeader'
import RenderBook from '../../Components/RenderBook/'

interface Books {
  items: string[]
}

const Home: React.FC = () => {

  const [books, setBooks] = useState<Books>({ items: []})

  return (
    <div className={styles.homeContainer}>
      <PageHeader setBooks={setBooks} />
      <div className={styles.bookSection}>
      {books.items.length >1 ?
      books.items.map(book => <RenderBook book={book}/>)
       : null}
      </div>
    </div>
  )
}

export default Home