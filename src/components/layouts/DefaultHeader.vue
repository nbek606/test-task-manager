<template>
    <div class="default__header">
        <div class="default__header-logo">
            <router-link 
                to="/"
            >
                TASKS
            </router-link>
        </div>
        <div class="default__header-link">
            <div 
                class="link__item"
                v-for="item in links"
                :key="item.link"
            >   
                <router-link 
                    :to="item.link"
                >
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>

import { useStore } from 'vuex'

export default {
    name: "DefaultHeader",

    setup () {
        const store = useStore()
        
        return {
            links: store.getters.defaultHeaderLinks
        }
    }
}
</script>
<style lang="scss" scoped>
    .default__header {
        height: 90px;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        align-items: center;

        &-logo {
            padding: 0px 30px;
            font-size: 40px;
            font-family: "Anta", sans-serif;
            
            a {
                text-decoration: none;
                color: #2b3344;
            }
        }

        &-link {
            a {
                text-decoration: none;
                color: #2b3344;

                &:hover {
                    color: #555;
                    text-decoration:underline;
                }
            }
        }
    }
</style>