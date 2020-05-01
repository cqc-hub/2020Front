<template>
    <div id="profile" >
        <nav-bar class="profile-nav" >
            <div slot="center"><b>个人信息</b></div>
        </nav-bar>
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                >
            <div v-if="!isLogin" >
                <div>
                    <div class="alert alert-warning alert-dismissible pppp" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <strong class="lead"><b>未登录!</b></strong> 请先登录(点击图片进行登陆)
                    </div>
                    <img src="~assets/img/lazyload.jpg" alt="" @click="goLogin" class="imgStyforlogin">
                </div>
            </div>
            <div v-else>
                <tab-control :titles="['基本信息','修改信息','查看成绩']"
                             @TabControlClick="TabControlClick"
                             ref="tabControl"
               />
                <base-info :currentIndex="currentIndex" :user="user"></base-info>
                <div class="editinfo" v-if="currentIndex==1">
                    <Edit-info></Edit-info>
                </div>
                <div class="scoreinfo" v-if="currentIndex==2">
                    <Show-score :user="user"></Show-score>
                </div>

            </div>
        </scroll>
        <div class="endLogin" @click="endLogin" v-show="isLogin">
            <div>退出</div>
        </div>
        <back-top class="back-top" v-show="isShow"
                  @click.native="backtop"
                  :class="{backtopshow:isShow}">
        </back-top>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "@/components/common/scroll/Scroll";
    import {backTop} from "@/common/mixin";
    import TabControl from "components/content/tabcontrol/TabControl";
    import BaseInfo from "./children/BaseInfo";
    import EditInfo from "./children/EditInfo";
    import ShowScore from "./children/ShowScore";
    export default {
        name: "Profile",
        data(){
            return{
                currentIndex:0
            }
        },
        components:{
            NavBar,
            Scroll,
            TabControl,
            BaseInfo,
            EditInfo,
            ShowScore
        },
        methods:{
            endLogin(){
                this.$store.commit('clareUser')
                this.$nextTick(function () {
                    this.$toast.isShow('退出登录成功',1500)
                })
            },
            TabControlClick(index){
                this.currentIndex=index
            },
            scroll_position(position){
                this.isShow=position.y<-300
            },
            goLogin(){
                this.$router.push('/login')
            }
        },
        computed:{

            isLogin(){
                return Object.keys(this.$store.state.user).length !=0
            },
            user(){
                return this.$store.state.user
            }

        },
        mixins:[backTop],
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    .imgStyforlogin{
        width: 170vw;
        height:600px;
    }
    .pppp{
        position: absolute;
        left: 0;
        right: 0;
        height: 44px;
    }
    #profile{
        background-color: rgba(248, 37, 83, 0.9);
    }
    .profile-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;

    }
    .fixedimg{
        position: fixed;
        z-index: -1;
    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0;
        left: 0;
        overflow: hidden;
    }
    .forlogin{
        position: relative;
        top: 40px;
        height: 100vh;
        left: 0;
        width: 180px;
        font-size: larger;
        font-weight: bolder;
    }

    table{
        height: 40vh;
    }
    .endLogin{
        position: absolute;
        bottom: 12%;
        right: 3%;
        width: 48px;
        height: 48px;
        background-color: rgba(0,0,0,.3);
        border-radius: 100%;
        font-size: 17px;
        font-weight: bold;
    }
    .endLogin>div{
        padding-left: 8px;
        padding-top: 12px;
    }
    .img{
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: url("~assets/img/login/LoginImg.jpg")no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(100px);
    }
</style>