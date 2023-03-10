import React from 'react'
import { images } from '../../assets/images';
import styles from './RenderBook.module.scss'

interface ImageLinks {
    thumbnail: string;
}

interface VolumeInfo {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: ImageLinks;
    title: string;
    subtitle: string;
}

interface Book {
    id: string;
    saleInfo: object;
    volumeInfo: VolumeInfo;
}

interface Props {
    book: Book;
}

const RenderBook: React.FC<Props> = ({ book }) => {

    const {
        // id, saleInfo,
        volumeInfo } = book;

    const {
        authors = [],
        // categories = [],
        // description,
        imageLinks: { thumbnail } = {},
        title,
        subtitle,
    } = volumeInfo;

    const securedImgSrc = thumbnail?.replace('http', 'https')
    return (
        <div className={styles.bookContainer}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={securedImgSrc || images.defaultPreview}
                    alt={title} />
            </div>
            <div className={styles.title}>{title}
            </div>
            {authors.length > 0 ?
                <div>  By: {authors.map((d, i) => <span key={i}>{d}</span>)}</div>
                : <div> No Authod Found </div>}
            <div className={styles.subtitle}>{subtitle}</div>
            
        </div>
    )
}

export default RenderBook
