<template>
    <div>
        {{userInfo}}
        <hr>
        {{userAll}}
    </div>
</template>

<script>
import {getUserInfo} from 'network/getU.js'
import {showUserAllInfo} from 'network/showUser.js'
    export default {
        name: "Home",
        data(){
            return{
                userInfo:{},
                userAll:[]
            }
        },
        methods:{
            getUser(){
                getUserInfo().then(res=>{
                    this.userInfo=res
                })

            },
            showAllUser(){
                showUserAllInfo().then(res=>{
                   this.userAll=res
                })
            }
        },
        mounted() {
            this.getUser()
            this.showAllUser()
        }
    }
</script>

<style scoped>

</style>