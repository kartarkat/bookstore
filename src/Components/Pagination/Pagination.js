import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = (props) => {
    const { setSearchIndex, handlePageClick, totalCount = 50 } = props
    const pageCount = [...Array(totalCount / 10).keys()];

    const incrementPage = () => {
        setSearchIndex((d) => d > 0 ? d - 1 : d)
    }

    const decrementPage = () => {
        setSearchIndex((d) => d < 5 ? d + 1 : d)
    }

    return (
        <div className={styles.painationContainer}>
            <div onClick={incrementPage}>Prev</div>
            {pageCount.map(d =>
                <div onClick={handlePageClick}>{d + 1}</div>
            )}
            <div onClick={decrementPage}>Next</div>
        </div>
    )
}

export default Pagination