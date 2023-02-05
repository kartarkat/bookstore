import { FETCH_BOOKS_URL } from "../../Utils/api";

export const fetchBooksData = async (query, setData, startIndex=0) => {
    fetch(`${FETCH_BOOKS_URL}${query}&startIndex=${startIndex}`)
    .then((res) => res.json())
    .then(d => setData(d))
  }