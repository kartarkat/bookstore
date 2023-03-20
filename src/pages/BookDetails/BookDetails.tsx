import React, { useContext, useEffect } from 'react'
import { images } from '../../assets/images';
import PageHeader from '../../components/PageHeader'
import { BooksDataContext } from '../../contexts/BooksDataProvider'
import { fetchBook } from '../../utils/api';
import styles from './BookDetails.module.scss'
import Loader from '../../components/Loader'

export default function BookDetails() {

  interface ImageLinks {
    thumbnail: string;
  }
  interface CurrentBook {
    volumeInfo: {
      title?: string;
      subtitle?: string;
      description?: string;
      averageRating?: number;
      ratingsCount?: number;
      authors?: string[];
      imageLinks?: ImageLinks;
      publisher?: string;
      publishedDate?: Date;
      previewLink?: string;
    };
    saleInfo: {
      saleability?: string;
      isEbook?: boolean;
      country?: string;
      retailPrice?: object;
      buyLink?: string;
    };
    selfLink: string;
  }

  let { currentBook, setCurrentBook } = useContext<{
    currentBook: CurrentBook;
    setCurrentBook: React.Dispatch<React.SetStateAction<CurrentBook>>
  }>(BooksDataContext)
  const { volumeInfo = {}, saleInfo = {}, selfLink } = currentBook || {};

  const {
    title = 'Loading Book',
    subtitle = 'No Subtitle found',
    description = 'No description available',
    averageRating = 0,
    ratingsCount = 0,
    previewLink = '',
    // publisher = 'Publisher Not found',
    // publishedDate = 'Date not found',
    imageLinks: { thumbnail = images.defaultPreview } = {},
    authors = [],
  } = volumeInfo

  const { isEbook = false, buyLink = '' } = saleInfo

  useEffect(() => {
    (async function () {
      if (!currentBook) {
        const id = (window.location.pathname).split('/').pop()
        const res = await fetchBook(id)
        setCurrentBook(res);
      }
    }())
  }, [currentBook, selfLink, setCurrentBook])

  const securedImgSrc = thumbnail?.replace('http', 'https')

  const renderTitle = () => <div>{title}</div>

  const renderRating = (averageRating, ratingsCount) => {
    return (
      <div className={styles.rating}>
        {averageRating === 0 ? <>Not rated Yet ⭐️</> :
          <>Rated {averageRating}/5 ⭐️ by {ratingsCount} 👥</>
        }
      </div>
    );
  };

  const renderBookDetails = () => {
    return (
      <div className={styles.bookContainer}>
        {!currentBook ? <Loader /> : <>
          <div className={styles.headSection}>
            <a href={previewLink} target='_blank' rel="noreferrer">
              <img src={securedImgSrc} alt="title" />
            </a>
            <div>
              <div className={styles.subtitle}>{subtitle}</div>
              {renderRating(averageRating, ratingsCount)}
              <div>Ebook Available: {isEbook ? <>Yes <a href={buyLink} target='_blank' rel="noreferrer">🔗</a></> : 'No'}</div>
            </div>
          </div>
          <div className={styles.about}>About the Book:</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.author}>
            {authors.length > 0 ?
              <>  By: {authors.map((d, i) => <span key={i}>{d}</span>)}</>
              : <> No Author Found </>
            }
          </div>
        </>
        }
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        children={renderTitle()}
      />
      {renderBookDetails()}
    </div>
  )
}

// const test = {
//   "kind": "books#volume",
//   "id": "RM70AgAAQBAJ",
//   "etag": "Uy+F1oaFtkg",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/RM70AgAAQBAJ",
//   "volumeInfo": {
//     "title": "Anime Explosion!",
//     "subtitle": "The What? Why? and Wow! of Japanese Animation, Revised and Updated Edition",
//     "authors": [
//       "Patrick Drazen"
//     ],
//     "publisher": "Stone Bridge Press",
//     "publishedDate": "2014-04-01",
//     "description": "One of the best overviews of the anime phenomenon, its history and cultural significance, ideal for surveys and in-depth study.",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_13",
//         "identifier": "9781611720136"
//       },
//       {
//         "type": "ISBN_10",
//         "identifier": "1611720133"
//       }
//     ],
//     "readingModes": {
//       "text": false,
//       "image": true
//     },
//     "pageCount": 390,
//     "printType": "BOOK",
//     "categories": [
//       "Performing Arts"
//     ],
//     "averageRating": 2.5,
//     "ratingsCount": 2,
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "0.1.0.0.preview.1",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=RM70AgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=RM70AgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.co.in/books?id=RM70AgAAQBAJ&printsec=frontcover&dq=anime&hl=&cd=1&source=gbs_api",
//     "infoLink": "http://books.google.co.in/books?id=RM70AgAAQBAJ&dq=anime&hl=&source=gbs_api",
//     "canonicalVolumeLink": "https://books.google.com/books/about/Anime_Explosion.html?hl=&id=RM70AgAAQBAJ"
//   },
//   "saleInfo": {
//     "country": "IN",
//     "saleability": "NOT_FOR_SALE",
//     "isEbook": false
//   },
//   "accessInfo": {
//     "country": "IN",
//     "viewability": "PARTIAL",
//     "embeddable": true,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": false
//     },
//     "pdf": {
//       "isAvailable": true,
//       "acsTokenLink": "http://books.google.co.in/books/download/Anime_Explosion-sample-pdf.acsm?id=RM70AgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=RM70AgAAQBAJ&hl=&source=gbs_api",
//     "accessViewStatus": "SAMPLE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "One of the best overviews of the anime phenomenon, its history and cultural significance, ideal for surveys and in-depth study."
//   }
// }

// const t2 = {
//   "kind": "books#volume",
//   "id": "U7qmDwAAQBAJ",
//   "etag": "9QeO+W16/I8",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/U7qmDwAAQBAJ",
//   "volumeInfo": {
//     "title": "Mini: A Book of Short Thoughts",
//     "authors": [
//       "Stephen Rafferty"
//     ],
//     "publisher": "Lulu Press, Inc",
//     "publishedDate": "2019-07-23",
//     "description": "This is Mini. Mini is a book of short thoughts. Exactly like the title says, it is a collection of short thoughts and stories made into a neat little pocketbook. The thoughts itself are funny, infectious, random and absurd. It really is a neat little pick up to your humorous collection. It’s short, sturdy and a great book to well put in your pocket...",
//     "industryIdentifiers": [
//       {
//         "type": "ISBN_13",
//         "identifier": "9780359505135"
//       },
//       {
//         "type": "ISBN_10",
//         "identifier": "0359505139"
//       }
//     ],
//     "readingModes": {
//       "text": true,
//       "image": true
//     },
//     "printType": "BOOK",
//     "categories": [
//       "Humor"
//     ],
//     "maturityRating": "NOT_MATURE",
//     "allowAnonLogging": false,
//     "contentVersion": "1.1.1.0.preview.3",
//     "panelizationSummary": {
//       "containsEpubBubbles": false,
//       "containsImageBubbles": false
//     },
//     "imageLinks": {
//       "smallThumbnail": "http://books.google.com/books/content?id=U7qmDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//       "thumbnail": "http://books.google.com/books/content?id=U7qmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//     },
//     "language": "en",
//     "previewLink": "http://books.google.co.in/books?id=U7qmDwAAQBAJ&printsec=frontcover&dq=mini&hl=&cd=1&source=gbs_api",
//     "infoLink": "https://play.google.com/store/books/details?id=U7qmDwAAQBAJ&source=gbs_api",
//     "canonicalVolumeLink": "https://play.google.com/store/books/details?id=U7qmDwAAQBAJ"
//   },
//   "saleInfo": {
//     "country": "IN",
//     "saleability": "FOR_SALE",
//     "isEbook": true,
//     "listPrice": {
//       "amount": 681.68,
//       "currencyCode": "INR"
//     },
//     "retailPrice": {
//       "amount": 340.84,
//       "currencyCode": "INR"
//     },
//     "buyLink": "https://play.google.com/store/books/details?id=U7qmDwAAQBAJ&rdid=book-U7qmDwAAQBAJ&rdot=1&source=gbs_api",
//     "offers": [
//       {
//         "finskyOfferType": 1,
//         "listPrice": {
//           "amountInMicros": 681680000,
//           "currencyCode": "INR"
//         },
//         "retailPrice": {
//           "amountInMicros": 340840000,
//           "currencyCode": "INR"
//         }
//       }
//     ]
//   },
//   "accessInfo": {
//     "country": "IN",
//     "viewability": "PARTIAL",
//     "embeddable": true,
//     "publicDomain": false,
//     "textToSpeechPermission": "ALLOWED",
//     "epub": {
//       "isAvailable": true,
//       "acsTokenLink": "http://books.google.co.in/books/download/Mini_A_Book_of_Short_Thoughts-sample-epub.acsm?id=U7qmDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//     },
//     "pdf": {
//       "isAvailable": true,
//       "acsTokenLink": "http://books.google.co.in/books/download/Mini_A_Book_of_Short_Thoughts-sample-pdf.acsm?id=U7qmDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//     },
//     "webReaderLink": "http://play.google.com/books/reader?id=U7qmDwAAQBAJ&hl=&source=gbs_api",
//     "accessViewStatus": "SAMPLE",
//     "quoteSharingAllowed": false
//   },
//   "searchInfo": {
//     "textSnippet": "This is Mini. Mini is a book of short thoughts. Exactly like the title says, it is a collection of short thoughts and stories made into a neat little pocketbook. The thoughts itself are funny, infectious, random and absurd."
//   }
// }