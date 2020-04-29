<template>
    <div id="reg">
        <nav-bar class="reg-nav">
            <div slot="center" >注册</div>
        </nav-bar>
        <div class="img"></div>
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                >
            <div class="suojin">
                <div class="row">
                <div class="col-1"></div>
                <div class="col-3"><label for="uname">用户名:</label></div>
                <div class="col-7">
                    <input type="text" id="uname" ref="uname" @input="saveuname" class="form-control" placeholder="输入用户名">
                </div>
            </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"></div>
                    <div v-show="unameLenErr" class="errShow ">用户名不能为空</div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"><label for="pwd">密 码:</label></div>
                    <div class="col-7">
                        <input type="password" id="pwd" ref="pwd" @input="savepwd" class="form-control" placeholder="输入密码">
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"></div>
                    <div v-show="pwdLenErr" class="errShow">密码必须大于等于三位数</div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"><label for="pwd1">重复密码</label></div>
                    <div class="col-7">
                        <input type="password" id="pwd1" ref="pwd1" @input="savepwd" class="form-control" placeholder="再次输入密码">
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"></div>
                    <div v-show="showErr" class="errShow">两次密码不一致</div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"><label>性别:</label></div>
                    <div class="col-7 col-3">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-5">
                                <label for="sex1">男</label>
                                <input id="sex1" name="sex" type="radio" value="男" checked @click="saveSex" ref="sex" />
                            </div>
                            <div class="col-5">
                                <label for="sex2">女</label>
                                <input id="sex2" name="sex" type="radio" value="女" ref="sex1" @click="saveSex1"/>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"><label for="age">年龄:</label></div>
                    <div class="col-7">
                        <input  type="text" id="age" ref="age" @input="saveage" class="form-control" placeholder="输入年龄">
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"></div>
                    <div v-show="ageErr" class="errShow" aria-required="true">请合理填写年龄(1岁~150岁)</div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"><label for="birth">生日:</label></div>
                    <div class="col-7">
                        <input type="text" id="birth" ref="birth" @input="savebirth" class="form-control" placeholder="输入生日">
                    </div>
                </div>
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-3"></div>
                    <div class="col-5">
                        <button @click="userReg" class="form-control  btn-info">注册</button>
                    </div>
                </div>

            </div></scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {regUserInfo} from 'network/getU.js'
    import Scroll from "@/components/common/scroll/Scroll";

    export default {
        name: "Reg",
        components:{
            NavBar,
            Scroll
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
            scroll_position(){},
            userReg(){
                // console.log(this.totalErr);
                this.totalErr ? regUserInfo(this.uname,this.pwd,this.sex,this.age,this.birth).then(res=>{
                    this.$toast.isShow('注册成功，快去登陆吧',1500)
                    this.$store.commit('saveRegName',this.uname)
                    this.$router.push('/login')
                }).catch(err=>console.log(err)):this.$toast.isShow('请正确填写注册信息',1500)
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
                return !(this.age>0 && this.age<=150)
            },
            totalErr(){
                return (this.ageErr==false && this.showErr==false && this.pwdLenErr==false && this.unameLenErr==false)
            },
            unameLenErr(){
                return this.uname.length<=0
            }
        },
        deactivated() {

        }
    }
</script>

<style scoped>
    [class *="col-3"]{
        padding-top: 10px;
    }
    .row{
        padding-bottom: 10px;
    }
    .suojin{
        padding-top: 30px;

    }
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
    font-size: 17px;
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
        position: relative;
        top: 0;
        /*height: 100vh;*/
        height: calc(100% - 44px - 49px);
        overflow: hidden;
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
    .img{
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: url("~assets/img/login/LoginImg.jpg")no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(50px);
    }
</style>