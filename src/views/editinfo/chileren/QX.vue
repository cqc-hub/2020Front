<template>
    <div id="qx">
        <div class="removeJL">
             <Show-all-jiaolian v-for="item in userAll" :jl="item"></Show-all-jiaolian>
        </div>

    </div>
</template>

<script>
    import ShowAllJiaolian from "./ShowAllJiaolian";
    export default {
        name: "QX",
        props:{
            userAll:{
                type:Array,
                default(){
                    return[]
                }
            }
        },
        components:{
            ShowAllJiaolian
        }
    }
</script>

<style scoped>
 #qx{
     position: relative;
     top: 15px;
 }
 .removeJL{
     border-bottom: rgba(0,0,0,.6) solid 10px;
 }
</style>