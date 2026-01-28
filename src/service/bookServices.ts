import API from "./api";

export const fetchBook = async () => {
    const data = await API.get('/book')
    return data?.data
}