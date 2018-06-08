<template>
    <div class="tab-box">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "Tab",
        data() {
            return {

            }
        }
    }
</script>
<style lang="sass" scoped>
    @import '$components/Tab/Tab.sass'
</style>
