import React, { useContext } from 'react'
import { BooksDataContext } from '../../contexts/BooksDataProvider'
// import { BooksDataContext } from '../../contexts/contexts'
// import { BooksDataContext } from '../../contexts/BooksDataProvider'

export default function BookDetails() {

  const { data, setData } = useContext(BooksDataContext)

  return (
    <div>
        BookDetails {data}
        <button onClick={()=> setData('changed')}>change</button>
    </div>
  )
}
