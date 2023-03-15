const BASE_URL = 'https://www.googleapis.com/books/v1/volumes/'
const AUTOCOMPLETE_URL = 'https://api.datamuse.com/sug?s='

export const fetchAllBooks = async(query, startIndex = 0, maxResults = 12,) => {
    if(startIndex !==0 ) startIndex *= maxResults 
    const url = `${BASE_URL}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`
    const res = await fetch(url)
    return await res.json()
}

export const fetchBook = async (id) => {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
}

export const fetchAutoComplete= async(query) => {
    const res = await fetch(`${AUTOCOMPLETE_URL}${query}`)
    return await res.json()
}

// books api reference
// https://developers.google.com/books/docs/v1/reference/volumes/list#try-it

