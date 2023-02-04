import React, { useState } from 'react'
import styles from './style.module.scss'
import { DebounceHelper } from '../../Utils/helper'
import { fetchBooksData } from './Home.actions'

function Home() {
  const dataSchema = {
    "kind": String,
    "totalItems": Number,
    "items": Array
  }

  const [data, setData] = useState(dataSchema)

  const handleOnChange = DebounceHelper((e) => {
    const searchquery = e.target.value
    return(
      fetchBooksData(searchquery, setData, 0)
    )});
  
  return (
    <div className={styles.input}>
      <div className={styles.heading}>search book here</div>
      <input onChange={e => handleOnChange(e)} />
      {
        Array.isArray(data?.items) &&
        data?.items.map(d => <div className={styles.render}>{d.volumeInfo.title}</div>)
      }
    </div>
  )
}

export default Home