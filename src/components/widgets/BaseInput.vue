<template>
    <div class="base__input">
        <label>
            {{ label }}
        </label>
        <input 
            :value="value"
            :type="type"
            :placeholder="placeholder"
            @input="$emit('update:value', $event.target.value)"
        />
    </div> 
</template>
<script>

export default {
    name: "BaseInput",
    props: {
        type: {
            type: String,
            default: 'text'
        },
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
        }
    },
}
</script>
<style lang="scss">
    .base__input {
        display: flex;
        flex-direction: column;

        input, label {
            font-size: 16px;
            color: #2b3344;
        }

        label {
            margin-bottom: 5px;
        }

        input {
            padding: 10px 10px;
            outline: none;
            border: 1px solid #bbcdd8;
            border-radius: 2px;
            font-weight: 400;
            margin-bottom: 10px;
        }
    }
</style>