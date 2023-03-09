import React from 'react'
import styles from './home.module.scss'
// import { DebounceHelper } from '../../Utils/helper'
// import { fetchBooksData } from './Home.actions'
// import Pagination from '../../Components/Pagination/Pagination'
import PageHeader from '../../Components/PageHeader'
// import AutoCompleteHelper from '../../Components/AutoCompleteHelper'

const Home: React.FC = () => {
  // interface dataSchema {
  //   "kind": String,
  //   "totalItems": Number,
  //   "items": Array<any>,
  // }

  // const queryRef = useRef(null)

  // const [data, setData] = useState<dataSchema>()
  // const [searchQuery, setSearchQuery] = useState<String>('')
  // const [searchIndex, setSearchIndex] = useState<number>(0)
  // const [loader, setLoader] = useState<Boolean>()

  // const handleOnChange = DebounceHelper((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value)
  //   setLoader(true)
  // });

//  console.log('okok', queryRef?.current?.value)

//   const renderBooksData = () => (
//     <div className={styles.booksContainer}>
//       {
//         Array.isArray(data?.items) &&
//         data?.items.map(d =>
//           <div className={styles.render}>{d?.volumeInfo?.title}</div>
//         )
//       }
//     </div>

//   )

//   const handlePageClick = (e) => {
//     setSearchIndex(Number(e.target.innerText))
//     console.log(typeof Number(e.target.innerText))
//   }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(queryRef?.current?.value){
  //     fetchBooksData(searchQuery, setData, searchIndex, setLoader)
  //   }
  // }

  // const renderData = () => {

  //   return (
  //     <>
  //       {loader ?
  //         <div className={styles.loader}> Loading data ...</div>
  //         : renderBooksData()}
  //       {searchQuery &&
  //         <Pagination
  //           searchIndex={searchIndex}
  //           setSearchIndex={setSearchIndex}
  //           handlePageClick={handlePageClick}
  //         />
  //       }
  //     </>
  //   )
  // }



  // const sf = () => <div>hi from sf</div>


  return (
    <div className={styles.homeContainer}>
      <PageHeader />
    </div>
  )
}

export default Home