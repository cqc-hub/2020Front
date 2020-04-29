<template>
    <div id="evalitem">
        <div class="media">
            <div class="media-left">
                <img src="~assets/img/eval/toux.jpg" class="media-object" style="width:60px; height: 60px">
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{evalInfoItem.uname}}</h4>
                <p>{{evalInfoItem.eval}}</p>
            </div>
        </div>
        <span>{{evalInfoItem.create | showDate}}</span>
    </div>
</template>

<script>
    import { formatDate } from "@/common/utils";
    export default {
        name: "EvalItem",
        props:{
            evalInfoItem:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        filters: {
            showDate(value) {
                return formatDate(new Date(value), "yyyy/MM/dd hh:mm");
            }
        }
    }
</script>

<style scoped>
    #evalitem{
        padding-top: 3px;
        border-bottom: #f6f6f6 solid 1px;
    }
.media-body{
    padding-left: 8px;
}
    span{
        position: relative;
        top:-20px
    }
</style>