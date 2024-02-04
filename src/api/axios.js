import axios from "axios";

console.log(process.env.FITNESS_APP_API_URL);

export default axios.create({
    baseURL: process.env.FITNESS_APP_API_URL,
    headers: {
        "Content-type": "application/json"
    }
})