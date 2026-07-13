import axios from 'axios'

const url = 'https://studies.cs.helsinki.fi/restcountries/api'

const getByName = (name) => {
    return axios.get(`${url}/name/${name}`).then(response => {
        return response.data
    })
}

const getAll = () => {
    return axios.get(`${url}/all`).then(response => {
        return response.data
    })
}

export default { getByName, getAll }