<template>
    <div class="task">
        <TaskForm 
            :task="taskForTheForm"
            :editing="editing"
            @createTask="createTask"
            @cancelEditing="cancelEditing()"
            @saveEditing="saveEditing"
        />

        <TaskList 
            :task-list="taskList"
            @remove="removeTaskById"
            @edit="editTaskById"
        />
    </div>
</template>

<script>

import TaskList from '@/components/tasks/TaskList.vue'
import TaskForm from '@/components/tasks/TaskForm.vue'
import { onMounted, computed, ref, reactive} from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'

export default {
    name: "TaskView",
    components: {
        TaskList,
        TaskForm
    },

    setup () {
        const store = useStore()
        const editing = ref(false)

        const emptyTaskForTheForm = {
            title: "",
            status: "",
            created_date: "",
        }

        const taskForTheForm = reactive({
            title: "",
            status: "",
            created_date: "",
        })

        onMounted (() => {
            store.dispatch('tasks')
        })

        const taskList = computed(() => {
            return store.getters.taskList
        })

        const removeTaskById = (id) => {
            store.dispatch('removeTaskById', id)
        }

        const editTaskById = (id) => {
            const editingTask = taskList.value.find(item => item.id == id)

            if (editingTask) {
                Object.assign(taskForTheForm, editingTask)
                editing.value = true
            }
        }

        const saveEditing = async (editingTask) => {
            await store.dispatch('editingTask', editingTask)
            delete taskForTheForm.id
            cancelEditing()
        }

        const cancelEditing = () => {
            editing.value = false
            Object.assign(taskForTheForm, emptyTaskForTheForm)
        }

        const createTask = async(task) => {
            task.created_date = moment(new Date).format('DD-MM-YYYY')
            await store.dispatch('createTask', task)
            Object.assign(taskForTheForm, emptyTaskForTheForm) 
        }

        return {
           taskList,
           taskForTheForm,
           editing,
           createTask,
           editTaskById,
           removeTaskById,
           saveEditing,
           cancelEditing
        }
    }
}
</script>

<style lang="scss" scoped>
    .task {
        padding: 30px;

        &__add {
            padding: 10px 0;
            text-align: right;
        }
    }
</style>