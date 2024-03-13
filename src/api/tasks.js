import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_URL

const uri = `${baseUrl}/tasks`

export const getTaskList = () => {
    return axios.get(uri)
}

export const removeTaskById = (id) => {
    return axios.delete(`${uri}/${id}`)
}

export const createTask = (task) => {
    return axios.post(uri, task)
}

export const editTask = (editingTask) => {
    return axios.put(`${uri}/${editingTask.id}`, editingTask)
}   