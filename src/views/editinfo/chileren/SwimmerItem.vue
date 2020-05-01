<template>
    <div >
        <table class="table  " style="text-align: center">
                <tr>
                    <td>{{Swimmer.uid}}</td>
                    <td>{{Swimmer.uname}}</td>
                </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "SwimmerItem",
        props:{
            Swimmer:{
                type:Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>

</style>