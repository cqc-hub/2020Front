<template>
    <div id="item">
           <div class="row">
               <div class="col-3 offset-1">{{jl.uid}}</div>
               <div class="col-3 ">{{jl.uname}}</div>
               <div class="col-5 "> <el-button type="danger" @click="removeJL" size="small" icon="el-icon-delete">移除教练身份</el-button></div>
           </div>
    </div>
</template>

<script>
    import {changeQX} from 'network/getU.js'

    export default {
        name: "ShowAllJiaolian",
        props:{
            jl:{
                type:Object,
                default(){
                    return{
                    }
                }
            }
        },
        methods:{
            removeJL(){
                changeQX(this.jl.uid,0).then(res=>{
                    this.$toast.isShow('移除成功',1500)
                    this.$bus.$emit('refreshUsers')
                }).catch(err=>{
                    console.log(err);
                    this.$toast.isShow('移除失败',1500)

                })
            }
        }
    }
</script>

<style scoped>
    #item{
        position: relative;
        height: 40px;
        text-align: center;
    }
.btn{
    height: 20px;
}
    [class *="col-"]{
        margin: 3px;
        border: #666666 2px solid;
    }
    .btn-warning{
        position: absolute;
        width: 30vw;
        top: 2px;
        right: 26px;
    }
    .btn-warning span{
        position: absolute;
       top: 0;
        right: 6px;
    }

</style>