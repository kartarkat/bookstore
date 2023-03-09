import React, { useRef } from 'react'
import { images } from '../../assets/images'
import styles from './SearchInput.module.scss'


export default function SearchInput({ handleSubmit }) {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleKeyDown = (event) => {
        let { keyCode, target: { value } } = event
        if (keyCode === 13) {
            handleSubmit(value)
        }
    }

    return (
        <div className={styles.inputContainer}>
            <input
                type='text'
                ref={inputRef}
                placeholder='Search for books'
                onKeyDown={handleKeyDown}
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


