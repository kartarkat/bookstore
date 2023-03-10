import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = (props) => {
    const { searchIndex, setSearchIndex, handlePageClick, totalCount = 50 } = props
    const pageCount = [...Array(totalCount / 10).keys()];

    const incrementPage = () => {
        setSearchIndex((d) => d > 0 ? d - 1 : d)
    }

    const decrementPage = () => {
        setSearchIndex((d) => d < 5 ? d + 1 : d)
    }

    return (
        <div className={styles.painationContainer}>
            <div onClick={incrementPage} disabled={searchIndex !== 0}>Prev</div>
            {pageCount.map((d,i) =>
                <div key={i} onClick={handlePageClick}>{d + 1}</div>
            )}
            <div onClick={decrementPage} disabled={searchIndex !== 5}>Next</div>
        </div>
    )
}

export default Pagination