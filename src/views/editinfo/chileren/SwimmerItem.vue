<template>
    <div id="swimmeritem">
        <table class="table  " style="text-align: center">
            <div class="row">
                <div class="col-3">id/name</div>
                <div class="col-3">score</div>
                <div class="col-6">教练建议</div>
            </div>
            <div class="row">
                <div class="col-1 ">
                    <td>{{Swimmer.uid}}</td>
               </div>
                <div class="col-2 ">
                    <td>{{Swimmer.uname}}</td>
               </div>
                <div class="col-1">
                    <td>{{Swimmer.score1}}</td>
               </div>
                <div class="col-1 ">
                    <td>{{Swimmer.score2}}</td>
               </div>
                <div class="col-1 ">
                    <td>{{Swimmer.score3}}</td>
               </div>
                <div class="col-6 " >
                    <td>{{Swimmer.bodyhel}}</td>
               </div>
            </div>
           <div class="row">
               <div class="col-12">
               <ul class="list-group">
                       <li class="list-group-item" @click="showedit"><div class="suojinitem">修改资料</div></li>
                   <div  ref="showEdit" id="showEdit" class="hhhh">
                        <div class="list-group-item">
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control" placeholder="项目一成绩" v-model="score1">
                                </div>
                                <div class="col-3">
                                    <button class="form-control" @click="saveScore1">save</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control" placeholder="项目二成绩" v-model="score2">
                                </div>
                                <div class="col-3">
                                    <button class="form-control" @click="saveScore2">save</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control" placeholder="项目三成绩" v-model="score3">
                                </div>
                                <div class="col-3">
                                    <button class="form-control" @click="saveScore3">save</button>
                                </div>
                            </div>
                        </div>
                        <div class="list-group-item ">
                            <textarea name="" id="" cols="30" rows="5" class="form-control fff" placeholder="对该用户建议" v-model="newbodyhel"></textarea>
                            <button class="btn btn-block" @click="saveBodyhel">save</button>
                        </div>
                        <div class="list-group-item" v-if="this.$store.state.user.qx==2">
                            <li class="list-group-item" @click="showedel"><div class="suojinitem">注销该用户</div></li>
                            <li class="list-group-item">
                                <div class="row " ref="deluser">
                                    <div class="col-12">
                                        <button class="btn btn-danger btn-block" @click="delUser">确认注销</button>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary btn-block" @click="backdel">取消</button>
                                    </div>
                                </div>
                            </li>
                        </div>
                   </div>
               </ul>
               </div>
           </div>
        </table>
    </div>
</template>

<script>
    import $ from 'jquery'
    import {
        delUser,
        changeBodyhel,
        changeScore1,
        changeScore2,
        changeScore3
    } from 'network/getU.js'

    export default {
        name: "SwimmerItem",
        props:{
            Swimmer:{
                type:Object,
                default(){
                    return{
                    }
                }
            }
        },
        data(){
            return{
                score1:'',
                score2:'',
                score3:'',
                newbodyhel:''
            }
        },
        methods:{
            saveScore1(){
                if (this.score1==''){
                    this.$toast.isShow('不能为空',1500)
                }else{
                    isNaN(this.score1) ? this.$toast.isShow('请输入数字',1500):changeScore1(this.Swimmer.uid,this.score1).then(res=>{
                        res ? this.$toast.isShow('修改成功',1500) : this.$toast.isShow('修改失败',1500)
                    }).catch(
                        this.$toast.isShow('请输入数字',1500)
                    )
                }
            },
            saveScore2(){
                if (this.score2==''){
                    this.$toast.isShow('不能为空',1500)
                }else{
                    isNaN(this.score2) ? this.$toast.isShow('请输入数字',1500):changeScore2(this.Swimmer.uid,this.score2).then(res=>{
                        res ? this.$toast.isShow('修改成功',1500) : this.$toast.isShow('修改失败',1500)
                    }).catch(
                        this.$toast.isShow('请输入数字',1500)
                    )
                }
            },
            saveScore3(){
                if (this.score3==''){
                    this.$toast.isShow('不能为空',1500)
                }else{
                    isNaN(this.score3) ? this.$toast.isShow('请输入数字',1500):changeScore3(this.Swimmer.uid,this.score3).then(res=>{
                        res ? this.$toast.isShow('修改成功',1500) : this.$toast.isShow('修改失败',1500)
                    }).catch(
                        this.$toast.isShow('请输入数字',1500)
                    )
                }
            },
            saveBodyhel(){
                if (this.newbodyhel==''){
                    this.$toast.isShow('不能为空',1500)
                }else{
                    changeBodyhel(this.Swimmer.uid,this.newbodyhel).then(res=>{
                        res ? this.$toast.isShow('修改成功',1500) : this.$toast.isShow('修改失败',1500)
                    })
                }
            },
            showedit(){
                $(this.$refs.showEdit).slideToggle()
                this.$bus.$emit('scrollRefresh')
            },
            showedel(){
                $(this.$refs.deluser).slideToggle('fast')
            },
            backdel(){
                $(this.$refs.deluser).slideUp('fast')
            },
            delUser(){
                delUser(this.Swimmer.uid).then(res=>{
                    res ? this.$toast.isShow('注销用户成功',1500) : this.$toast.isShow('用户不存在或以注销',1500)
                    this.$bus.$emit('refreshUsers')
                })
            }
        }
    }
</script>

<style scoped>
    #swimmeritem{
        border: #233233 solid 1px;
        border-bottom: none;
    }
    .list-group{
        position: relative;
    }
.list-group-item{
}
    .suojinitem{
        margin: -10px;
    }
    .hhhh{
        display: none;
    }
    .fff{
        margin-bottom: 7px;
    }
</style>