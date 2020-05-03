<template>
    <div id="baseinfo" v-if="currentIndex==0" class="container">
        <table border="2" cellpadding="10" cellspacing="5" frame="border" width="100%" class="table table-bordered  ">
            <tr class="table-active ">
                <th>id</th>
                <td>{{user.uid}}</td>
            </tr>
            <tr class="">
                <th>姓名</th>
                <td>{{user.uname}}</td>
            </tr>
            <tr>
                <th>性别</th>
                <td>{{user.sex}}</td>
            </tr>
            <tr >
                <th>年龄</th>
                <td>{{user.age}}</td>
            </tr>
            <tr >
                <th>生日</th>
                <td>{{user.birth}}</td>
            </tr>

        </table>
    </div>
</template>

<script>
    export default {
        name: "BaseInfo",
        props:{
            currentIndex:0,
            user:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        computed:{

        }
    }
</script>

<style scoped>
    #baseinfo{
        position: relative;
        top: 20px;
        text-align: center;
        width: 100vw;
    }
</style>