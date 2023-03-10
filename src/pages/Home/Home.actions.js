import { FETCH_BOOKS_URL } from "../../utils/api";

export const fetchBooksData = async (query, setData, startIndex=0, setLoader) => {
    fetch(`${FETCH_BOOKS_URL}${query}&startIndex=${startIndex}`)
    .then((res) => res.json())
    .then(d => setData(d))
    .then(setLoader(false))
  }