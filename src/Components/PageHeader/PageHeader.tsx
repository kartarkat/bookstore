import React from 'react'
import styles from './PageHeader.module.scss'

function PageHeader({children}) {
  return (
    <div className={styles.headerContainer}>
        {children}
    </div>
  )
}

export default PageHeader