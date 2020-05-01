<template>
    <div id="showallswimmer">
            <div class="container-fluid">
                <table class="table table-bordered " style="text-align: center">
                    <tr class="table-info">
                        <div class="row">
                            <td>uid</td>
                            <td>uname</td>
                            <td>score1</td>
                            <td>score2</td>
                            <td>score3</td>
                            <td>bodyhel</td>
                        </div>


                    </tr>
                </table>
                <Swimmer-item v-for="item in userAll" :Swimmer="item"></Swimmer-item>
            </div>
    </div>
</template>

<script>
    import SwimmerItem from "./SwimmerItem";
    export default {
        name: "ShowAllSwimmer",
        data(){
            return{
            }
        },
        props:{
            userAll:{
                type:Array,
                default(){
                    return[]
                }
            }
        },
        components:{
            SwimmerItem
        }

    }
</script>

<style scoped>

</style>