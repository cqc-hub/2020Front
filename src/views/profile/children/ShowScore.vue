<template>
    <div>
        <table border="2" cellpadding="10" cellspacing="5" frame="border" width="100%" class="table table-bordered">
            <tr class="table-active">
                <th>id</th>
                <td>{{user.uid}}</td>
            </tr>
            <tr >
                <th>score1</th>
                <td>{{user.score1}}</td>
            </tr>
            <tr >
                <th>score2</th>
                <td>{{user.score2}}</td>
            </tr>
            <tr >
                <th>score3</th>
                <td>{{user.score3}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ShowScore",
        props:{
            user:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
    }
</script>

<style scoped>

</style>