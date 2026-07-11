import axios from "axios";

const url = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(url).then(response => {
        return response.data
    })
}

const create = (newPerson) => {
    return axios.post(url, newPerson).then(response => {
        return response.data
    })
}

const update = (id, updatePerson) => {
    return axios.put(`${url}/${id}`, updatePerson).then(response => {
        return response.data
    })
}

const deletePerson = (id) => {
    return axios.delete(`${url}/${id}`).then(response => {
        return response.data
    })
}

export default { getAll, create, update, deletePerson }