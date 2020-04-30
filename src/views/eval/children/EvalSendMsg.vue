<template>
    <div id="sendMsg">
        <div class="row">
            <div class="col-10">
                <textarea class="form-control" placeholder="请先登录在留言" ref="liuyan"></textarea>
            </div>
            <div class="col-2"><button class="btn btn-info btntn" @click="sendMsg">发送</button></div>
        </div>

    </div>
</template>

<script>
    import {reviseEvals} from 'network/getU.js'
    export default {
        name: "EvalSendMsg",
        methods:{
            sendMsg(){
                let liuyan=this.$refs.liuyan.value
                if (Object.keys(this.$store.state.user).length!=0){
                    if (this.$refs.liuyan.value==''){
                        this.$toast.isShow('请输入内容',1500)
                    }else{
                        this.sendLiuyan(liuyan)
                    }
                }else {
                    this.$toast.isShow('请先登录',1500)
                }
            },
            sendLiuyan(liuyan){
                const create=(new Date()).getTime()
                const uname=this.$store.state.user.uname
                const uid=this.$store.state.user.uid
                // console.log(liuyan,create, uname, uid);
                reviseEvals(uname,create,liuyan,uid).then(res=>{
                    this.$toast.isShow('留言成功',1500)
                    this.$refs.liuyan.value=''
                    const _this=this
                    this.$emit('refreshEval')
                })
            }
        },
        computed:{
            liuyan(){
                return this.$refs.liuyan.value
            }
        },
        mounted() {

        },
        deactivated() {
        }
    }
</script>

<style scoped>
#sendMsg{
    height: 35px;
    background-color: rgba(0,0,0,.6);
}
    .btntn{
        position: relative;
        bottom: 0px;
        width: 69px;
        right: 32px;

    }
</style>