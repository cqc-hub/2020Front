<template>
    <div id="editinfo">
        <nav-bar class="edit-nav" >
            <div slot="center" @click="aaa"><b>信息管理</b></div>
        </nav-bar>
        <tab-control :titles="qx"
                     @TabControlClick="TabControlClick"
                     ref="tabControl"
        />
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                >
            <Show-all-swimmer :userAll="userFilter" v-if="this.currentIndex==0"></Show-all-swimmer>
            <QX v-if="this.currentIndex==1"></QX>
            <hr>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "@/components/common/scroll/Scroll";
    import {showUserAllInfo} from 'network/showUser.js'
    import ShowAllSwimmer from "./chileren/ShowAllSwimmer";
    import TabControl from "components/content/tabcontrol/TabControl";
    import QX from "./chileren/QX";
    import $ from 'jquery'
    export default {
        name: "EditInfo",
        data(){
            return{
                userAll:[],
                currentIndex:0

            }
        },
        components:{
            NavBar,
            Scroll,
            ShowAllSwimmer,
            TabControl,
            QX
        },
        methods:{
            aaa(){
                $(document.querySelectorAll('#showEdit')).slideUp()
                this.$nextTick(function () {
                    this.$refs.scroll.refresh()
                })
            },
            TabControlClick(index){
                this.currentIndex=index
            },
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
            const _this=this
            this.showAllUser()
            this.$bus.$on('scrollRefresh',()=>{
                _this.$refs.scroll.refresh()
            })
            this.$bus.$on('refreshUsers',()=>{
                _this.showAllUser()
            })
        },
        computed:{
            userFilter(){
                return this.userAll.filter(item=>{
                    return item.qx<1
                })
            },
            qx(){
               return this.$store.state.user.qx==2 ? ['运动员信息管理','用户权限管理'] : ['运动员信息管理']
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
        height: calc(100% - 44px - 49px - 40px);
        overflow: hidden;
    }
    .edit-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;
    }
</style>