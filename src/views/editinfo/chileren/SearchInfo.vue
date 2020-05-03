<template>
    <div id="SearchInfo">
        <div class="">
            <span>
                <input ref="searchUid" @keyup.enter="searchUser" type="text" class="bl  col-6 offset-1 form-control" placeholder="输入id进行搜索" v-model="searchUid">
                <svg @click="searchUser"  class="bl bi bi-search" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" clip-rule="evenodd"/>
            </svg>
            </span>
            <span class="right" @click="backinfo">返回
                <svg class="bi bi-arrow-90deg-left" width="1.7em" height="1.7em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.104 2.396a.5.5 0 0 1 0 .708L3.457 5.75l2.647 2.646a.5.5 0 1 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M2.75 5.75a.5.5 0 0 1 .5-.5h6.5a2.5 2.5 0 0 1 2.5 2.5v5.5a.5.5 0 0 1-1 0v-5.5a1.5 1.5 0 0 0-1.5-1.5h-6.5a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"/>
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchInfo",
        data(){
            return{
                searchUid:''
            }
        },
        methods:{
            searchUser(){
                this.$emit('searchUid',this.searchUid)
            },
            backinfo(){
                this.$emit('backinfo')
                this.$refs.searchUid.value=''
            }
        }
    }
</script>

<style scoped>
    #SearchInfo{
        position: relative;
        top: 10px;
        background-color: #ffffff;
        z-index: 2;
    }
.search{
    position: relative;
    left: 20px;
    top: 5px;
}
    .row input{
        position: relative;
        height: 30px;
        top: 6px;
    }
    .bl{
        display: inline-block;
        left: -7px;
    }
    .right{
        margin: 5px;
    }
</style>