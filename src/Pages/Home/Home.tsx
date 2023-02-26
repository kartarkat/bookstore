import React, { useEffect, useRef, useState } from 'react'
import styles from './home.module.scss'
import { DebounceHelper } from '../../Utils/helper'
import { fetchBooksData } from './Home.actions'
import Pagination from '../../Components/Pagination/Pagination'
import AutoCompleteHelper from '../../Components/AutoCompleteHelper'

const Home: React.FC = () => {
  interface dataSchema {
    "kind": String,
    "totalItems": Number,
    "items": Array<any>,
  }

  const queryRef = useRef()

  const [data, setData] = useState<dataSchema>()
  const [searchQuery, setSearchQuery] = useState<String>('')
  const [searchIndex, setSearchIndex] = useState<number>(0)
  const [loader, setLoader] = useState<Boolean>()

  const handleOnChange = DebounceHelper((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setLoader(true)
  });

 console.log('okok', queryRef?.current?.value)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(queryRef?.current?.value){
      fetchBooksData(searchQuery, setData, searchIndex, setLoader)
    }
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
     <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <input 
        ref={queryRef} 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </form>
      <AutoCompleteHelper
        searchValue={searchQuery}
        onSearchChange={handleOnChange}
        optionLabelKey="word"
        optionValueKey="word"
        apiUrl="https://api.datamuse.com/sug"
        debounceTime={500}
        handleSubmit={handleSubmit}
      />
      {renderData()}
    </div>
  )
}

export default Home