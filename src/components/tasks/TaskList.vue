<template>
    <div class="task__list">
        <table>
            <thead>
                <th
                    v-for="column in taskListColumns"
                    :key="column.key"
                > 
                    {{ column.title }}
                </th>
            </thead>
            <tbody>
                <tr
                    v-for="listItem in list"
                    :key="listItem.id"
                >
                    <td>
                        {{ listItem.title }}
                    </td>
                    <td>
                        {{
                            listItem.status
                        }}
                    </td>
                    <td>
                        {{ listItem.created_date }}
                    </td>
                    <td>
                        <BaseButton 
                            text="редактировать"
                            font-size="12"
                            background-color="#b4d267"
                            @click="$emit('edit', listItem.id)"
                            key="edit"
                        />
                    </td>
                    <td>
                        <BaseButton 
                            text="удалить"
                            font-size="12"
                            background-color="#de002e"
                            @click="$emit('remove', listItem.id)"
                            key="remove"
                        />
                    </td>    
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { toRef  } from 'vue'
import { taskListColumns } from './Task'
import BaseButton from '@/components/widgets/BaseButton.vue'
 
export default {
    name: "TaskList",
    components: { BaseButton },
    props: {
        taskList: {
            type: Array,
            required: true
        }
    },

    setup (props) {
        const list = toRef(props, 'taskList')

        return {
            list,
            taskListColumns
        }
    }
}
</script>
<style lang="scss" scoped>
    .task__list {
        width: 100%;
        min-height: 100px;
        margin-top: 30px;  
        
        table {
            border-spacing: 0px;
            border-collapse: collapse;
            
            th, td {
                padding: 10px 20px;
                text-align: left;
            }

            th {
                background-color: #bbcdd8;
            }

            tr {
                border-bottom: 1px solid #bbcdd8;

                td {

                }
            }
        }
    }
</style>