import API from "./api"

export const auth = async (data: {
    email: string;
    password: string;
}) => {
    try {
        const res = await API.post('/auth/login', data);
        return res.data;
    } catch (err) {
        throw err;
    }
}