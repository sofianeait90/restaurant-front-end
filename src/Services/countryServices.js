import http from "./httpServices";
// import { apiUrl } from "../config.json";

// const apiCountry = apiUrl + "/country";
export function getCountry() {
    try {
        // console.log(apiCountry);
        return http.get("http://localhost:5005/country");
    } catch (err) {
        return err;
    }
}