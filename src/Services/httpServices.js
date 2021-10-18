import axios from "axios";

axios.interceptors.response.use(null, (error) => {
    //parameter of interceptors (succes , errors)
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {
        console.log("loggin the errror  ", error);
    }

    return Promise.reject(error);
});

function setJwt(Jwt) {
    axios.defaults.headers.common["x-auth-token"] = Jwt;
}
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
};