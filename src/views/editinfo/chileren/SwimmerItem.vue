<template>
    <div id="swimmeritem">
        <table class="table  " style="text-align: center">
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
                <div class="col-6 ">
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
                                    <button class="form-control" >save</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control" placeholder="项目二成绩" v-model="score2">
                                </div>
                                <div class="col-3">
                                    <button class="form-control">save</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-9">
                                    <input type="text" class="form-control" placeholder="项目三成绩" v-model="score3">
                                </div>
                                <div class="col-3">
                                    <button class="form-control">save</button>
                                </div>
                            </div>
                        </div>
                        <div class="list-group-item ">
                            <textarea name="" id="" cols="30" rows="5" class="form-control fff" placeholder="对该用户建议"></textarea>
                            <button class="btn btn-block">save</button>
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
    import {delUser} from 'network/getU.js'

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
                score3:''
            }
        },
        methods:{
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