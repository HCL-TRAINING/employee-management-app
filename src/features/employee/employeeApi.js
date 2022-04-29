const { default: axios } = require("axios")

const url = 'https://jsonplaceholder.typicode.com/users';


export const fetchEmployeeList = () => {
    return axios.get(url);
}

export const addEmployee = payload => {
    return axios.post(url, payload);
}

export const removeEmployee = id => {
    return axios.delete(`${url}/${id}`);
}

export const updateEmployee = (id, payload) => {
    console.log('pppp', payload);
    return axios.put(`${url}/${id}`, payload);
}
