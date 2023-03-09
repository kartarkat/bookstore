import React from 'react'
import { images } from '../../assets/images'
import Input from '../Input'
import styles from './PageHeader.module.scss'

function PageHeader() {

  const handleInputSubmit = (query: string) => {
    console.log(query, 'oo')
  }

  return (
    <div className={styles.headerContainer}>
        <img className={styles.logo} src={images.logo} alt='logo'/>
        <Input handleSubmit={handleInputSubmit}/>
    </div>
  )
}

export default PageHeader