export const FETCH_BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const fetchBooks = async(query) => {
    const res = await fetch(`${FETCH_BOOKS_URL}${query}`)
    return await res.json()
}
//startIndex

// reference
// https://developers.google.com/books/docs/v1/reference/volumes/list#try-it

