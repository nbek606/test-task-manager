const state = {
    defaultHeaderLinks: [
        {
            title: "Список задач",
            link: "/tasks"
        }
    ]
}

const getters = {
    defaultHeaderLinks: state => state.defaultHeaderLinks
}

export default {
    state,
    getters
}