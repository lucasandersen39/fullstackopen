import axios from "axios";

const url_current = `https://api.openweathermap.org/data/2.5/weather`

const getByCoodinates = (lat, lon) => {
    const api_key = import.meta.env.VITE_SOME_KEY
    return axios.get(`${url_current}?lat=${lat}&lon=${lon}&appid=${api_key}`)
        .then(response => {
            return response.data
        })
}


export default { getByCoodinates }