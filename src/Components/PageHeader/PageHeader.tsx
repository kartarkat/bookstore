import React from 'react'
import { images } from '../../assets/images'
import { fetchBooks } from '../../Utils/api'
import SearchInput from '../SearchInput'
import styles from './PageHeader.module.scss'

function PageHeader({setBooks}) {

  const handleInputSubmit = async(query: string) => {
    if(query)setBooks(await fetchBooks(query))
  }

  console.log('reload test')

  return (
    <div className={styles.headerContainer}>
        <img className={styles.logo} src={images.logo} alt='logo'/>
        <SearchInput handleSubmit={handleInputSubmit}/>
    </div>
  )
}

export default PageHeader