<template>
    <div class="base__select">
        <label>
            {{ label }}
        </label>
        <select
            :value="value"
            @input="$emit('update:value', $event.target.value)"
        >
          <option 
            v-for="item in options"
            :value="item.title"
            :key="item.title"
          >
            {{ item.title }}
          </option>
        </select>
    </div>
</template>
<script>
export default {
    name: "BaseSelect",
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss">
    .base__select {
        display: flex;
        flex-direction: column;

        select, label {
            font-size: 16px;
            color: #2b3344;
        }

        label {
            margin-bottom: 5px;
        }

        select {
            padding: 10px 10px;
            outline: none;
            border: 1px solid #bbcdd8;
            border-radius: 2px;
            font-weight: 400;
            margin-bottom: 10px;
        }
    }
</style>