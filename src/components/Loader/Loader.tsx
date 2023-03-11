import React from 'react'
import { images } from '../../assets/images'
import styles from './Loader.module.scss'

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
    <img className={styles.loader} src={images.loader} alt='loader' />
  </div>
  )
}
