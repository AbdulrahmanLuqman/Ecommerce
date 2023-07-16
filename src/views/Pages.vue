<script>
    import {  defineComponent } from 'vue'
    export default defineComponent({
        data(){
            return{
                emit:[ 'goTo' ]
            }
        },
        methods: {
            // programmatic navigation
            goTo(){
                this.$router.push('/home')
            }
        },
    })
</script>

<template>
    <div>
        <button @click="$emits('goTo')">goTo</button>
    </div>
</template>

<style scoped>
     
</style>