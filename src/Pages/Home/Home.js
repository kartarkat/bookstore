import React, { useState } from 'react'
import styles from './style.module.scss'
import { DebounceHelper } from '../../Utils/helper'
import { FETCH_BOOKS_URL } from '../../Utils/api'

function Home() {
  const [data, setData] = useState({})
  

  const fetchBooks = (e) => {
    fetch(`${FETCH_BOOKS_URL}${e.target.value}`).then((res) => res.json()).then(d => setData(d))
  }

  const handleOnChange = DebounceHelper((e) => fetchBooks(e));
  
  return (
    <div className={styles.input}>
      <div className={styles.heading}>search book here</div>
      <input onChange={e => handleOnChange(e)} />
      {
        Array.isArray(data?.items) &&
        data?.items.map(d => <div>{d.volumeInfo.title}</div>)
      }
    </div>
  )
}

export default Home