import React, { useContext } from 'react'
import { images } from '../../assets/images';
import styles from './RenderBook.module.scss'
import { useNavigate } from "react-router-dom";
import { BooksDataContext } from '../../contexts/BooksDataProvider';

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
    const navigate = useNavigate()
    const { setCurrentBook } = useContext<{ setCurrentBook: any }>(BooksDataContext);

    const { id, volumeInfo } = book;

    const {
        authors = [],
        imageLinks: { thumbnail } = {},
        title,
        subtitle,
    } = volumeInfo;

    const securedImgSrc = thumbnail?.replace('http', 'https')
    const handleBookClick = () => {
        navigate(`book/${id}`);
        setCurrentBook(book);
    }
    return (
        <div className={styles.bookContainer} onClick={handleBookClick}>
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
                : <div> No Author Found </div>}
            <div className={styles.subtitle}>{subtitle}</div>

        </div>
    )
}

export default RenderBook
