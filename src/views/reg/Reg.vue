<template>
    <div id="reg">
        <nav-bar class="reg-nav">
            <div slot="center" >注册</div>
        </nav-bar>
        <div class="content">
            <div class="login-content">
                <label for="uname">用户名:
                    <input type="text" id="uname" ref="uname" @input="saveuname">
                </label>
            </div>
            <div v-show="unameLenErr" class="errShow">用户名不能为空</div>
            <div class="login-content">
                <label for="pwd">密码：
                    <input type="password" id="pwd" ref="pwd" @input="savepwd">
                </label>
            </div>
            <div v-show="pwdLenErr" class="errShow">密码必须大于等于三位数</div>
            <div class="login-content">
                <label for="pwd1">重复密码：
                    <input type="password" id="pwd1" ref="pwd1" @input="savepwd">
                </label>
            </div>
             <div v-show="showErr" class="errShow">两次密码不一致</div>
            <div class="login-content sex">
                <label>性别：</label>
                <label><input name="sex" type="radio" value="男" checked @click="saveSex" ref="sex"/>男 </label>
                <label><input name="sex" type="radio" value="女" ref="sex1" @click="saveSex1"/>女 </label>
            </div>
            <div class="login-content">
                <label for="age">年龄：
                    <input type="text" id="age" ref="age" @input="saveage">
                </label>
            </div>
            <div v-show="ageErr" class="errShow" aria-required="true">请合理填写年龄</div>
            <div class="login-content">
                <label for="birth">生日：
                    <input type="text" id="birth" ref="birth" @input="savebirth">
                </label>
            </div>
            <div class="login-content"><button @click="userReg">注册</button></div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {regUserInfo} from 'network/getU.js'

    export default {
        name: "Reg",
        components:{
            NavBar
        },
        data(){
            return{
                uname:'',
                pwd:'',
                showErr:false,
                isErr:false,
                sex:'男',
                age:0,
                birth:'10/10',
                pwdLenErr:true
            }
        },
        methods:{
            userReg(){
                // console.log(this.totalErr);
                this.totalErr ? regUserInfo(this.uname,this.pwd,this.sex,this.age,this.birth).then(res=>{
                    this.$toast.isShow('注册成功，快去登陆吧',1500)
                    this.$store.commit('saveRegName',this.uname)
                    this.$router.push('/login')
                }).catch(err=>console.log(err)):this.$toast.isShow('请完整注册信息',1500)
            },
            savebirth(){
                this.birth=this.$refs.birth.value
            },
            saveage(){
                this.age=this.$refs.age.value
            },
            saveSex(){
                this.sex=this.$refs.sex.value
            },
            saveSex1(){
                this.sex=this.$refs.sex1.value
            },
            saveuname(){
                // console.log(this.$refs.uname.value);
                this.uname=this.$refs.uname.value
            },
            savepwd(){
                this.pwdLenErr=this.$refs.pwd1.value.length<3
                if(this.$refs.pwd1.value==this.$refs.pwd.value){
                    this.pwd=this.$refs.pwd1.value
                    this.showErr=false
                }else{
                    this.showErr=true
                }
            },
            savesex(){
                this.sex=this.$refs.sex.value
            }
        },
        computed:{
            ageErr(){
                return !(this.age>=0 && this.age<=150)
            },
            totalErr(){
                return (this.ageErr==false && this.showErr==false && this.pwdLenErr==false && this.unameLenErr==false)
            },
            unameLenErr(){
                return this.uname.length<=0
            }
        }
    }
</script>

<style scoped>
    .sex{
        display: flex;
        justify-content: space-around;
    }
.reg-nav{
    background-color: var(--color-tint);
    color: white;
    font-weight: bolder;
}
#reg{
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
    .errShow{
        color: red;
    }
</style>