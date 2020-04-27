<template>
    <div>
        1111
    </div>
</template>

<script>
import {getUserInfo} from 'network/getU.js'
    export default {
        name: "Home",
        data(){
            return{
                userInfo:{}
            }
        },
        methods:{
            getUser(){
                getUserInfo().then(res=>{
                    console.log(res);
                })

            }
        },
        mounted() {
            this.getUser()
        }
    }
</script>

<style scoped>

</style>