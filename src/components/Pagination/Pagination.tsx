import React, { useContext } from 'react'
import { BooksDataContext } from '../../contexts/BooksDataProvider'
import styles from './Pagination.module.scss'

const Pagination = (props) => {
    const { searchIndex, setSearchIndex } = useContext<{
        searchIndex: number;
        setSearchIndex: React.Dispatch<React.SetStateAction<number>>;
      }>(BooksDataContext)
    const totalCount = 50
    const pageStart = 0
    const pageEnd = (totalCount / 10)
    const pageArray = [...Array(pageEnd).keys()];

    const incrementPage = () => {
        setSearchIndex((d) => d > pageStart ? d - 1 : d)
    }

    const decrementPage = () => {
        setSearchIndex((d) => d < (pageEnd -1) ? d + 1 : d)
    }

    const handlePageClick = (event) => {
        const value = Number(event.target.innerText) -1
        setSearchIndex((d) => d !== value ? value : d)
    }

    return (
        <div className={styles.paginationContainer}>
            <div onClick={incrementPage} disabled={searchIndex !== 0}>Prev</div>
            {pageArray.map((d,i) =>
                <div key={i} onClick={handlePageClick}>{d + 1}</div>
            )}
            <div onClick={decrementPage} disabled={searchIndex !== 5}>Next</div>
        </div>
    )
}

export default Pagination