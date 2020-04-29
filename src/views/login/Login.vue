<template>
    <div class="login">
        <nav-bar class="login-nav">
            <div slot="center" >登陆</div>
        </nav-bar>
        {{uname}}
        {{pwd}}
        <div class="content">
            <div class="login-content">
                <label for="uname">用户名:
                    <input type="text" id="uname" ref="uname" @input="saveuname">
                </label>
            </div>
            <div class="login-content">
                <label for="pwd">密码：
                    <input type="password" id="pwd" ref="pwd" @input="savepwd">
                </label>
            </div>
            <div class="login-content"><button @click="userSubmit()">登陆</button></div>
            <div class="login-content"><button @click="gouserReg()">注册</button></div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getUserInfo} from 'network/getU.js'

    export default {
        name: "Login",
        components:{
            NavBar,
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
                        }else {
                            console.log(this.uname);
                            this.uname=="" ? this.$toast.isShow('请填写用户名',1500) :this.$toast.isShow('用户名或密码错误',1500)

                        }
                    })


            },
            saveuname(){
                // console.log(this.$refs.uname.value);
                this.uname=this.$refs.uname.value
            },
            savepwd(){
                this.pwd=this.$refs.pwd.value
            }
        }
    }
</script>

<style scoped>
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
    .login-content{
        position: relative;
        border: #666666 solid 1px;
        height: 30px;
        margin-top: 10px;
        flex: 0;
    }
    .content{
        position: absolute;
        top: 20%;
        left: 10%;
        flex-wrap:wrap;
    }
    .login-content input{
        margin: 3px 0;
    }
    .login-content button{
        width: 100%;
        height: 100%;
    }
</style>