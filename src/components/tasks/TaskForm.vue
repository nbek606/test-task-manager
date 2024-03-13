<template>
    <form 
        class="task__form"
    >   
        <BaseInput 
            label="Название"
            type="text"
            placeholder="Название"
            v-model:value="newTask.title"
        />
    
        <BaseSelect 
            label="Статус"
            placeholder="Статус"
            :options="taskSelectOptions"
            v-model:value="newTask.status"
        />

        <div v-if="!editing">
            <BaseButton 
                text="Создать"
                backgroundColor="#2b3344"
                @click="$emit('create-task', newTask)"
            />
        </div>
        <div v-else>
            <BaseButton
                text="Отредактировать"
                backgroundColor="#b4d267"
                @click="$emit('save-editing', newTask)"
            />
            <BaseButton
                text="Отменить"
                backgroundColor="#2b3344"
                @click="$emit('cancel-editing')"
            />
        </div>
    </form>
</template>
<script>
import BaseButton from '@/components/widgets/BaseButton.vue'
import BaseInput from '@/components/widgets/BaseInput.vue'
import BaseSelect from '@/components/widgets/BaseSelect.vue'
import { taskSelectOptions } from './Task'
import { toRef } from 'vue'

export default {
    name: "TaskForm",
    components: { 
        BaseButton, BaseInput, BaseSelect 
    },

    props: {
        editing: {
            type: Boolean,
            required: true
        },
        task: {
            type: Object,
            required: true
        }  
    },

    setup (props) {
        let newTask = toRef(props, 'task')

        return {
            taskSelectOptions,
            newTask
        }
    }
}
</script>
<style lang="">
    
</style>