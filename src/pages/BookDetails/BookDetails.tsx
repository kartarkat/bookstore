import React, { useContext } from 'react'
import PageHeader from '../../components/PageHeader'
import { BooksDataContext } from '../../contexts/BooksDataProvider'

export default function BookDetails() {

  interface CurrentBook {
    volumeInfo: {
      title: string;
    };
  }

  const { currentBook } = useContext<{ currentBook: CurrentBook }>(BooksDataContext)
  const { volumeInfo: { title = 'Oops no book selected' } = {} } = currentBook || {};

  const renderTitle = () => <div>{title}</div>

  return (
    <div>
      <PageHeader
        children={renderTitle()}
      />
    </div>
  )
}
