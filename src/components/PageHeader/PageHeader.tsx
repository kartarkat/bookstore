import React from 'react'
import { images } from '../../assets/images'
import styles from './PageHeader.module.scss'

function PageHeader({children}) {

  return (
    <div className={styles.headerContainer}>
        <img className={styles.logo} src={images.logo} alt='logo'/>
        {children}
    </div>
  )
}

export default PageHeader