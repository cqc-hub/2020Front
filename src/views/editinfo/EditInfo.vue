<template>
    <div id="editinfo">
        <nav-bar class="edit-nav" >
            <div slot="center" ><b>信息管理</b></div>
            <div slot="right" @click="aaa" ><i class="el-icon-thumb"></i>收起</div>
            <div slot="left" @click="showsearch1">
                <svg  class="bi bi-search" width="1.5em" height="1.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" clip-rule="evenodd"/>
                </svg>
            </div>
        </nav-bar>
        <tab-control :titles="qx"
                     @TabControlClick="TabControlClick"
                     ref="tabControl"
        />
        <Search-info class="searchinfo" v-show="showsearch" @searchUid="searchUid" @backinfo="backinfo"></Search-info>
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                @pullingUp="pullingUp"
                >
            <Show-all-swimmer :userAll="userFilter" v-if="this.currentIndex==0 && showsearch111==false"></Show-all-swimmer>
            <Show-all-swimmer :userAll="userFilter2" v-if="this.currentIndex==0 && showsearch111==true"></Show-all-swimmer>
            <QX v-if="this.currentIndex==1 && showsearch111==false" :userAll="jiaolianFilter"></QX>
            <QX v-if="this.currentIndex==1 && showsearch111==true" :userAll="jiaolianFilter1"></QX>
            <hr>
        </scroll>
        <back-top class="back-top" v-show="isShow"
                  @click.native="backtop"
                  :class="{backtopshow:isShow}">
        </back-top>
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
    import {backTop} from "@/common/mixin";
    import SearchInfo from "./chileren/SearchInfo";
    import {debounce} from 'common/utils'
    export default {
        name: "EditInfo",
        data(){
            return{
                userAll:[],
                currentIndex:0,
                showsearch:false,
                showsearch111:false,
                userFilter2:[],
                jiaolianFilter1:[]

            }
        },
        components:{
            NavBar,
            Scroll,
            ShowAllSwimmer,
            TabControl,
            QX,
            SearchInfo,
            forSearchInfo:false
        },
        mixins:[backTop],
        methods:{
            pullingUp(){
                this.$refs.scroll.refresh()
                this.$nextTick(()=>{
                    this.$refs.scroll.finishPullUp()
                })
            },
            backinfo(){
                this.showsearch111=false
            },
            searchUid(uid){
                this.showsearch111=true
               this.userFilter2=this.userFilter.filter(item=>{
                    return item.uid==uid
                })
               this.jiaolianFilter1=this.jiaolianFilter.filter(item=>{
                    return item.uid==uid
                })
            },
            showsearch1(){
                this.showsearch=!this.showsearch
            },
            aaa(){
                $(document.querySelectorAll('#showEdit')).slideUp()
                this.$nextTick(function () {
                    this.$refs.scroll.refresh()
                })
            },
            TabControlClick(index){
                this.currentIndex=index
            },
            scroll_position(position){
                this.isShow=position.y<-300
            },
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
            jiaolianFilter(){
                return this.userAll.filter(item=>{
                    return item.qx==1
                })
            },
            qx(){
               return this.$store.state.user.qx==2 ? ['运动员信息管理','用户权限管理'] : ['运动员信息管理']
            }
        },
        created() {
            this.pullingUp=debounce(this.pullingUp,500)
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
        height: calc(100% - 44px - 49px - 40px - 40px);
        overflow: hidden;
    }
    .edit-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;
    }
</style>