import http from "./httpServices";
// import { apiUrl } from "../config.json";

// const apiCountry = apiUrl + "/country";
export function getAddressType() {
    try {
        // console.log(apiCountry);
        return http.get("http://localhost:5005/addressType");
    } catch (err) {
        return err;
    }
}