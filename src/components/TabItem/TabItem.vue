<template>
    <div class="tab-item">
        <a class="name" v-bind:href="tabItemLink">{{name}}</a>
    </div>
</template>
<script>
    export default {
        name: "TabItem",
        props: {
            name: String,
            tabItemLink: String
        },
        data(){
            return{
                
            }
        }
    }
</script>
<style lang="sass" scoped>
@import '$components/TabItem/TabItem.sass'
</style>

