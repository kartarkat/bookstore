import React, { useEffect, useState } from 'react'
import styles from './home.module.scss'
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
  const [searchQuery, setSearchQuery] = useState<String>('')
  const [searchIndex, setSearchIndex] = useState<number>(0)
  const [loader, setLoader] = useState<Boolean>()

  useEffect(() => {
    searchQuery && fetchBooksData(searchQuery, setData, searchIndex, setLoader)
    console.log(searchQuery, searchIndex)
  }, [searchIndex, searchQuery])

  const handleOnChange = DebounceHelper((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setLoader(true)
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


  const renderData = () => {

    return (
      <>
        {loader ?
          <div className={styles.loader}> Loading data ...</div>
          : renderBooksData()}
        {searchQuery &&
          <Pagination
            searchIndex={searchIndex}
            setSearchIndex={setSearchIndex}
            handlePageClick={handlePageClick}
          />
        }
      </>
    )
  }


  return (
    <div className={styles.homeContainer}>
      <div className={styles.heading}>search book here</div>
      <input onChange={e => handleOnChange(e)} />
      {renderData()}
    </div>
  )
}

export default Home