import React from 'react'
import { images } from '../../assets/images'
import { fetchBooks } from '../../Utils/api'
import Input from '../Input'
import styles from './PageHeader.module.scss'

function PageHeader({setBooks}) {

  const handleInputSubmit = async(query: string) => {
    setBooks(await fetchBooks(query))
  }

  console.log('reload test')

  return (
    <div className={styles.headerContainer}>
        <img className={styles.logo} src={images.logo} alt='logo'/>
        <Input handleSubmit={handleInputSubmit}/>
    </div>
  )
}

export default PageHeader