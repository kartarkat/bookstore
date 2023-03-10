const FETCH_BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=12&q='
const AUTOCOMPLETE_URL = 'https://api.datamuse.com/sug?s='

export const fetchBooks = async(query) => {
    const res = await fetch(`${FETCH_BOOKS_URL}${query}`)
    return await res.json()
}

export const fetchAutoComplete= async(query) => {
    const res = await fetch(`${AUTOCOMPLETE_URL}${query}`)
    return await res.json()
}


// https://api.datamuse.com/sug?s=mini
//startIndex

// reference
// https://developers.google.com/books/docs/v1/reference/volumes/list#try-it

