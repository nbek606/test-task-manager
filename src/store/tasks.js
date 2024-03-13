import { getTaskList, removeTaskById, createTask, editTask } from '@/api/tasks'

const state = {
    list: []
}

const mutations = {
    setList: (state, payload) => state.list = payload,

    setListAfterDeletion (state, id) {
        state.list = state.list.filter(item => item.id != id)
    },

    setListAfterCreate(state, task) {
        state.list.push(task)
    },

    setListAfterEditing(state, task) {
        state.list = state.list.map((item) => (
            item = item.id == task.id ? {...item, ...task} : item
        ))
    }
}

const actions = {
    tasks({ commit }) {
        return getTaskList().then((response) => {
            commit('setList', response.data)
        }).catch(() => {})
    },

    removeTaskById({commit}, id) {
        return removeTaskById(id).then(() => {
            commit('setListAfterDeletion', id)
        }).catch(() => {})
    },

    async createTask({ commit }, payload) {
        return await createTask(payload).then((response) => {
            commit('setListAfterCreate', response.data)
        }).catch(() => {})
    },

    async editingTask({ commit }, payload) {
        return await editTask(payload).then(() => {
            commit('setListAfterEditing', payload)
        }).catch(() => {})
    }
}

const getters = {
    taskList: state => state.list
}

export default {
    state,
    mutations,
    actions,
    getters
}