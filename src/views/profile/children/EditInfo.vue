<template>
    <div id="EditInfo">
            <ul class="list-group">
                <li class="list-group-item" @click="changePwd">修改密码</li>
                <div class="list-group-item hhide" id="changePwdInfo" >
                    <input type="password" class="form-control" placeholder="请输入旧密码" ref="oldPwd" @input="saveOldPwdErr">
                    <input type="text" class="form-control alert-danger" placeholder="密码错误" disabled v-show="oldPwdErr">
                    <input type="password" class="form-control" placeholder="请输入新密码" v-model="newPwd" >
                    <input type="text" class="form-control alert-danger" placeholder="新密码不能小于三位数" disabled v-show="newPwdLenErr">
                    <input type="password" class="form-control" placeholder="请再一次输入新密码" ref="newPwd" v-model="newPwd1">
                    <input type="text" class="form-control alert-danger" placeholder="两次新密码输入不一致" disabled v-show="newPwdDiffentErr">

                    <input type="button" class="form-control btn-info" value="提交" @click="changePwdInfo">
                </div>
                <li class="list-group-item" @click="changeAge">修改年龄</li>
                <div class="list-group-item hhide" id="changeAgeInfo">
                    <input type="text" class="form-control" placeholder="输入新年龄" v-model="newAge">
                    <input type="text" class="form-control alert-danger" placeholder="请合理输入年龄(1~150)" disabled v-show="ageErr">
                    <input type="button" class="form-control" value="提交" @click="changeAgeInfo">
                </div>
                <li class="list-group-item" @click="changeBir">修改生日</li>
                <div class="list-group-item hhide" id="changeBirInfo">
                    <input type="text" class="form-control" placeholder="输入新生日" v-model="newBir">
                    <input type="button" class="form-control" value="提交" @click="changeBirInfo">
                </div>
            </ul>
    </div>
</template>

<script>
    import $ from 'jquery'
    import {changepwd,changebir,changeage,lookforuser} from 'network/getU'
    export default {
        name: "EditInfo",
        data(){
            return{
                newPwd: '',
                oldPwdErr:false,
                newPwd1:'',
                newAge:'',
                newBir:''
            }
        },
        methods: {
            saveOldPwdErr(){
                this.oldPwdErr=this.$refs.oldPwd.value!=this.oldPwd
            },
            changeAgeInfo(){
                if (this.ageErr){
                    this.$toast.isShow('请合理输入年龄',1500)
                }else{
                    changeage(this.$store.state.user.uid,this.newAge).then(res=>{
                        this.$toast.isShow('成功修改年龄为'+this.newAge+'岁',1500)
                        lookforuser(this.$store.state.user.uname).then(res=>{
                            this.$store.commit('saveUser',res)
                        })

                    })
                }
            },
            changeBirInfo(){
                if (this.birErr){
                    this.$toast.isShow('新生日不能为空',1500)
                }else{
                    changebir(this.$store.state.user.uid,this.newBir).then(res=>{

                        this.$toast.isShow('生日修改成功',1500)
                        lookforuser(this.$store.state.user.uname).then(res=>{
                            this.$store.commit('saveUser',res)
                        })
                    })
                }
            },
            changePwdInfo(){
                if (this.totalErr){
                    changepwd(this.$store.state.user.uid,this.newPwd).then(res=>{
                        this.$toast.isShow('修改密码成功,请重新登陆',1500)
                        this.$store.commit('clareUser')
                    })
                }else {
                    this.$toast.isShow('请正确填写资料',1500)
                }
            },
            changePwd() {
                $('#changePwdInfo').slideToggle()
            },
            changeAge() {
                $('#changeAgeInfo').slideToggle()
            },
            changeBir() {
                $('#changeBirInfo').slideToggle()
            }
        },
        computed:{
            oldPwd(){
                return this.$store.state.user.pwd
            },
            newPwdLenErr(){
                return  this.newPwd.length<3
            },
            newPwdDiffentErr(){
                return !(this.newPwd1==this.newPwd)
            },
            totalErr(){
                return this.oldPwdErr==false && this.newPwdLenErr==false && this.newPwdDiffentErr==false
            },
            ageErr(){
                return this.newAge<1 || this.newAge>150
            },
            birErr(){
                return this.newBir==''
            }

        }

    }
</script>

<style scoped>
.list-group{
    padding-top: 20px;
    text-align: center;
}
   .hhide{
       display: none;
    }
</style>