<template>
    <div id="showallswimmer">
        <div class="container">
            {{userAll}}

        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowAllSwimmer",
        data(){
            return{
            }
        },
        props:{
            userAll:{
                type:Array,
                default(){
                    return[]
                }
            }
        }

    }
</script>

<style scoped>

</style>