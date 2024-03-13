<template>
    <div 
        class="base__button"
        :style="{
            backgroundColor: backgroundColor,
            fontSize: `${fontSize}px`
        }"
    >
        {{ text }}
    </div>
</template>
<script>

export default {
    name: "BaseButton",

    props: {
        text: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            default: '#2b3344'
        },
        fontSize: {
            type: String,
            default: '16'
        },
        color: {
            type:String,
            default: '#fff'
        }
    },

    setup () {

    }
}
</script>
<style lang="scss" scoped>
    .base__button {
        padding: 10px 10px;
        cursor: pointer;
        color: #fff;
        background: #2b3344;
        display: inline-block;
        margin-right: 20px;
    }
</style>