import React, { useRef, useState } from 'react'
import { images } from '../../assets/images'
import { fetchAutoComplete } from '../../utils/api';
import { debounce } from '../../utils/helper'
import styles from './SearchInput.module.scss'

interface WordSuggestion {
    word: string;
}

type Suggestions = WordSuggestion[];

export default function SearchInput({ handleSubmit }) {

    const [suggestions, setSuggestions] = useState<Suggestions>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const [prevQuery, setPrevQuery] = useState('')

    const handleKeyDown = (e) => {
        const query = e.target.value;
        if (e.keyCode === 13) {
            setPrevQuery(query)
            setSuggestions([])
            if(prevQuery !== query) handleSubmit(query);
        }
        else autoCompleteFilter(query);
    };

    const autoCompleteFilter = async (query: string) => {
        setSuggestions(await fetchAutoComplete(query))
    }

    const handleSuggestionClick = (e) => {
        const value = e.target.textContent
        if(inputRef?.current) inputRef.current.value = value;
        setSuggestions([])
        handleSubmit(value)
    }

    const debouncedHandleKeyDown = debounce(handleKeyDown, 250);

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputSection}>
                <input
                    type='text'
                    placeholder='Search for books'
                    onKeyDown={debouncedHandleKeyDown}
                    className={styles.input}
                    ref={inputRef}
                />
                <img
                    className={styles.icon}
                    src={images.search}
                    alt='search'
                />

            </div>
            <div className={styles.suggestions}>
                {suggestions.map((item, index) =>
                    <div
                        key={index}
                        className={styles.suggestion}
                        onClick={handleSuggestionClick}
                    >
                        {item.word}</div>
                )}
            </div>
        </div>
    )
}


