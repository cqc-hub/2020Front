<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center" ><b>Home</b></div>
        </nav-bar>
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
            {{userInfo}}
            <hr>
            {{userAll}}
        </scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getUserInfo} from 'network/getU.js'
    import {showUserAllInfo} from 'network/showUser.js'
    import {showBannersInfo} from 'network/showBanners.js'
    import Scroll from "@/components/common/scroll/Scroll";
    import HomeSwiper from "views/home/childrencomponents/HomeSwiper";

    export default {
        name: "Home",
        data(){
            return{
                userInfo:{},
                userAll:[],
                banners:[]
            }
        },
        components:{
            NavBar,
            Scroll,
            HomeSwiper
        },
        methods:{
            swiperImgLoad(){},
            loadMore(){},
            scroll_position(position){

            },
            getUser(){
                // getUserInfo().then(res=>{
                //     this.userInfo=res
                // }).catch(err=>console.log('请求失败'+err))

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
            }
        },
        mounted() {
            this.getUser()
            this.showAllUser()
            this.getBanners()
        }
    }
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0;
        left: 0;
        overflow: hidden;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;

    }
</style>