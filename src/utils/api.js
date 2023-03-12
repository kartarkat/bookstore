const FETCH_BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q='
const AUTOCOMPLETE_URL = 'https://api.datamuse.com/sug?s='

export const fetchBooks = async(query, startIndex = 0, maxResults = 12,) => {
    if(startIndex !==0 ) startIndex += maxResults 
    const url = `${FETCH_BOOKS_URL}${query}&startIndex=${startIndex}&maxResults=${maxResults}`
    const res = await fetch(url)
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

