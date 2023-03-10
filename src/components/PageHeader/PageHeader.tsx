import React from 'react'
import { images } from '../../assets/images'
import { fetchBooks } from '../../utils/api'
import SearchInput from '../SearchInput'
import styles from './PageHeader.module.scss'

function PageHeader({setBooks}) {

  const handleInputSubmit = async(query: string) => {
    if(query)setBooks(await fetchBooks(query))
  }

  return (
    <div className={styles.headerContainer}>
        <img className={styles.logo} src={images.logo} alt='logo'/>
        <SearchInput handleSubmit={handleInputSubmit}/>
    </div>
  )
}

export default PageHeader