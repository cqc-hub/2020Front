<template>
    <div id="showallswimmer">
            <div class="container-fluid">
                <table class="table table-bordered " style="text-align: center">
                    <tr class="table-info">
                    </tr>
                </table>
                <div v-if="this.isshow">
                <Swimmer-item v-for="item in userAll" :Swimmer="item"></Swimmer-item>
                </div>
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
        },
        computed:{
            isshow(){
                return Object.keys(this.userAll).length!=0
            }
        }

    }
</script>

<style scoped>
[class *="col-"]{
    text-align: center;
}
</style>