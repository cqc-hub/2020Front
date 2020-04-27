<template>
    <div class="tost" v-show="show" :class="{toastshow:show}">
        <div class="text">{{msg}}</div>
    </div>
</template>

<script>

    export default {
        name: "Register",
        data(){
            return{
                msg:'',
                show:false
            }
        },
        methods:{
            isShow(msg,delay){
                this.show=true
                this.msg=msg
                setTimeout(()=>{
                    this.show=false
                },delay)
            }
        },
        components:{
        }
    }
</script>

<style scoped>
    .tost{
        position: fixed;
        z-index: 200;
        color: white;
        padding: 5px 10px;
        background-color: rgba(0,0,0,.5);
        height: 18%;
        width:60vw;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 5px;
    }
    .text{
        margin-top: 20%;
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        text-align: center;
    }
    .toastshow{
        animation: toastshow 0.2s linear;
    }
    @keyframes toastshow{
        from{opacity: 0;}
        to{opacity: 0.6;}
    }
</style>