import React from 'react'
import { images } from '../../assets/images'
import { debounce } from '../../Utils/helper'
import styles from './SearchInput.module.scss'


export default function SearchInput({ handleSubmit }) {

    const ok = (val) => { console.log('ok', val) }

    const aa = (e) => {
        debounce(() => ok(e.target.value), 500)
    }

    return (
        <div className={styles.inputContainer}>
            <input
                type='text'
                placeholder='Search for books'
                onChange={aa}
                className={styles.input}
            />
            <img
                className={styles.icon}
                src={images.search}
                alt='search'
            />
        </div>
    )
}


