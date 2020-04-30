<template>
    <div id="evals">
        <nav-bar class="eval-nav" >
            <div slot="center"><b>留言板</b></div>
        </nav-bar>
        <div class="img"></div>
        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                @position="scroll_position"
                >
            <Eval-item v-for="item in evalInfo" :evalInfoItem="item"></Eval-item>

        </scroll>
        <Eval-send-msg class="sendmsg" @refreshEval="refreshEval"></Eval-send-msg>
        <back-top class="back-top" v-show="isShow"
                  @click.native="backtop"
                  :class="{backtopshow:isShow}">
        </back-top>
    </div>
</template>

<script>
    import {showEvals} from 'network/getU.js'
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "@/components/common/scroll/Scroll";
    import {backTop} from "@/common/mixin";
    import EvalItem from "./children/EvalItem";
    import EvalSendMsg from "./children/EvalSendMsg";
    export default {
        name: "Eval",
        data(){
            return{
                evalInfo:[],
                refreshTimer:function () {
                    const f=this.getEvalInfo
                    setInterval(()=>{
                        f()
                        // console.log('refresh');
                    },3000)
                }
            }
        },
        components:{
            NavBar,
            Scroll,
            EvalItem,
            EvalSendMsg
        },
        methods:{
            refreshEval(){
                this.getEvalInfo()
                this.refreshTimer()
            },
            getEvalInfo(){
                showEvals().then(res=>{
                    this.evalInfo=res
                })
            },
            scroll_position(position){
                this.isShow=position.y<-300
            },
            clearT(){
                clearTimeout(this.refreshTimer)
                // console.log('clear');
            }
        },
        mounted() {
            this.getEvalInfo()
            // console.log(this.refreshTimer);
        },
        mixins:[backTop],
        activated() {
            this.$refs.scroll.refresh()
        },
        deactivated() {
            this.clearT()
        }
    }
</script>

<style scoped>
    .sendmsg{
        position: fixed;
        bottom: 49px;
        left: 0;
        right: 0;

    }
#evals{
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.2);
    font-weight: bolder;
}
    .eval-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;
    }
.content{
    position: absolute;
    top: 44px;
    bottom: 79px;
    right: 0;
    left: 0;
    overflow: hidden;
}
.img{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: url("~assets/img/login/LoginImg.jpg")no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(100px);
    z-index: -1;
}
</style>