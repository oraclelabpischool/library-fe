import API from "./api";

export const fetchStudents = async () => {
    const data = await API.get('/service/student')
    return data?.data
}