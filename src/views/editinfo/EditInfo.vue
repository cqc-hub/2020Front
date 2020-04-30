<template>
    <div id="editinfo">
        <nav-bar class="edit-nav" >
            <div slot="center"><b>信息管理</b></div>
        </nav-bar>
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                >
            <Show-all-swimmer :userAll="userFilter"></Show-all-swimmer>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "@/components/common/scroll/Scroll";
    import {showUserAllInfo} from 'network/showUser.js'
    import ShowAllSwimmer from "./chileren/ShowAllSwimmer";
    export default {
        name: "EditInfo",
        data(){
            return{
                userAll:[],
            }
        },
        components:{
            NavBar,
            Scroll,
            ShowAllSwimmer
        },
        methods:{
            scroll_position(position){},
            showAllUser(){
                showUserAllInfo().then(res=>{
                    const _this=this
                    this.userAll=res
                    this.$nextTick(()=>{
                        _this.$refs.scroll.refresh()
                    })
                })
            },
        },
        mounted() {
            this.showAllUser()
        },
        computed:{
            userFilter(){
                return this.userAll.filter(item=>{
                    return item.qx<1
                })
            }
        }
    }
</script>

<style scoped>
    #editinfo{
        height: 100vh;
        position: relative;
        background-color: rgba(0,0,0,.05);
        width: 100vw;
    }
    .content{
        position: relative;
        top: 0;
        /*height: 100vh;*/
        height: calc(100% - 44px - 49px);
        overflow: hidden;
    }
    .edit-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;
    }
</style>