import { createStore } from 'vuex'

import tasks from './tasks'
import menu from './menu.js'

export default createStore({
  modules: {
    tasks,
    menu
  }
})
