<template>
    <div id="home">
        <div @click="showdata">
            <nav-bar class="home-nav" >
                <div slot="center"><b>首页</b></div>
            </nav-bar>
        </div>
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                @pullingUp="loadMore">
            <home-swiper :banners="banners" ></home-swiper>
            <Home-rules></Home-rules>
            <div>
                            {{userAll}}
                            放news什么的
            </div>
            <div class="container">
            </div>
        </scroll>
        <back-top class="back-top" v-show="isShow"
                  @click.native="backtop"
                  :class="{backtopshow:isShow}">
        </back-top>

    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {showUserAllInfo} from 'network/showUser.js'
    import {showBannersInfo} from 'network/showBanners.js'
    import Scroll from "@/components/common/scroll/Scroll";
    import HomeSwiper from "views/home/childrencomponents/HomeSwiper";
    import HomeRules from "views/home/childrencomponents/HomeRules";
    import {showLogin} from "common/login";
    import {backTop} from "@/common/mixin";

    export default {
        name: "Home",
        data(){
            return{
                user:{},
                userAll:[],
                banners:[]
            }
        },
        components:{
            NavBar,
            Scroll,
            HomeSwiper,
            HomeRules
        },
        mixins:[backTop],
        methods:{

            // swiperImgLoad(){
            //   Object.keys(this.$store.state.user).length==0 ? showLogin():this.user=this.$store.state.user
            //   this.$toast.isShow('请先登录',1500)
            // },
            loadMore(){},
            scroll_position(position){
                this.isShow=position.y<-300
            },
            showAllUser(){
                showUserAllInfo().then(res=>{
                   this.userAll=res
                })
            },
            getBanners(){
                showBannersInfo().then(res=>{
                    // console.log(res);
                    this.banners=res

                })
            },
            showdata(){
                const dd=(new Date()).getTime()
                console.log(dd);
            },
        },
        computed:{

        },
        mounted() {
            this.showAllUser()
            this.getBanners()
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
        background-color: rgba(0,0,0,.05);
    }
    .content{
        position: relative;
        top: 0;
        /*height: 100vh;*/
        height: calc(100% - 44px - 49px);
        overflow: hidden;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;

    }
    .back-top{
        z-index: 8;
    }
</style>