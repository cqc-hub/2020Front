<template>
    <div class="login">
        <nav-bar class="login-nav">
            <div slot="center" >登陆</div>
        </nav-bar>

        <div class="container">
            <div class="suojin">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-3"><label for="uname">用户名:</label></div>
                    <div class="col-7">
                        <input type="text" class="form-control" v-model="uname" id="uname" ref="uname" @input="saveuname" placeholder="请输入用户名" >
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-3"> <label for="pwd">密 码:</label></div>
                    <div class="col-7">
                        <input class="form-control" type="password" v-model="pwd" id="pwd" ref="pwd" @input="savepwd" placeholder="请输入密码">
                    </div>
                </div>
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3"><button @click="userSubmit" class=" form-control">登陆</button></div>
                    <div class="col-3"><button @click="gouserReg" class=" form-control">注册</button></div>

                </div>
            </div>
        </div>
        <div class="img"></div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getUserInfo} from 'network/getU.js'
    export default {
        name: "Login",
        components:{
            NavBar
        },
        data(){
            return{
                uname:'',
                pwd:'',
            }
        },
        methods:{
            gouserReg(){
                this.$router.push('/reg')
            },
            userSubmit(){

                    getUserInfo(this.uname,this.pwd).then(res=>{
                        if(Object.keys(res).length!=0){
                            this.$store.commit('saveUser',res)
                            this.$toast.isShow('登陆成功，'+res.uname+'欢迎回来',1500)
                            this.$router.push('/profile')
                            this.uname=''
                            this.pwd=''
                        }else {
                            this.uname=="" ? this.$toast.isShow('请填写用户名',1500) :this.$toast.isShow('用户名或密码错误',1500)

                        }
                    }).catch(err=>{
                        this.$toast.isShow('登陆失败,请检查网络',1500)

                    })


            },
            saveuname(){
                // console.log(this.$refs.uname.value);
                this.uname=this.$refs.uname.value
            },
            savepwd(){
                this.pwd=this.$refs.pwd.value
            }
        },
        activated() {
            this.uname=this.$store.state.regName
        }
    }
</script>

<style scoped>
    .row{
        padding-bottom: 10px;
    }
    .suojin{
        padding-top: 100px;

    }
    [class *="col-3"]{
        padding-top: 5px;
    }
    .login-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;
    }
    .login{
        height: 100vh;
        position: relative;
        background-color: rgba(0,0,0,.03);
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