import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { DebounceHelper } from '../../Utils/helper'
import { fetchBooksData } from './Home.actions'
import Pagination from '../../Components/Pagination/Pagination'

function Home() {
  interface dataSchema {
    "kind": String,
    "totalItems": Number,
    "items": Array<any>,
  }

  const [data, setData] = useState<dataSchema>()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchIndex, setSearchIndex] = useState(0)

  useEffect(() => {
    searchQuery && fetchBooksData(searchQuery, setData, searchIndex)
    console.log(searchQuery, searchIndex)
  }, [searchIndex, searchQuery])

  const handleOnChange = DebounceHelper((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  });

  const renderBooksData = () => (
    <div className={styles.booksContainer}>
      {
        Array.isArray(data?.items) &&
        data?.items.map(d =>
          <div className={styles.render}>{d?.volumeInfo?.title}</div>
        )
      }
    </div>
  )

  const handlePageClick = (e) => {
    setSearchIndex(Number(e.target.innerText))
    console.log(typeof Number(e.target.innerText))
  }


  return (
    <div className={styles.homeContainer}>
      <div className={styles.heading}>search book here</div>
      <input onChange={e => handleOnChange(e)} />
      {renderBooksData()}
      {searchQuery &&
        <Pagination
          searchIndex={searchIndex}
          setSearchIndex={setSearchIndex}
          handlePageClick={handlePageClick}
        />
      }
    </div>
  )
}

export default Home