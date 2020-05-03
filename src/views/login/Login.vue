<template>
    <div class="login">
        <nav-bar class="login-nav">
            <div slot="center" >登陆</div>
            <div slot="left" @click="goback">
                <svg class="bi bi-chevron-left" width="2em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" clip-rule="evenodd"/>
                </svg>
            </div>
        </nav-bar>

        <div class="container">
            <div class="suojin">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-3"><label for="uname">用户名:</label></div>
                    <div class="col-7">
                        <input type="text" class="form-control" v-model="uname" id="uname" ref="uname" @input="saveuname" placeholder="请输入用户名" @keyup.enter="userSubmit">
                    </div>
                </div>
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-3"> <label for="pwd">密 码:</label></div>
                    <div class="col-7">
                        <input class="form-control" type="password" v-model="pwd" id="pwd" ref="pwd" @input="savepwd" placeholder="请输入密码" @keyup.enter="userSubmit">
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
            goback(){
                this.$router.go(-1)
            },
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