<template>
    <div class="container" >
        <div id="showscore">
            <table border="2" cellpadding="10" cellspacing="5" frame="border" width="100%" class="table table-bordered">
                <tr class="table-active">
                    <th>id</th>
                    <td>{{user.uid}}</td>
                </tr>
                <tr >
                    <th>力量测试</th>
                    <td>{{Score1}}</td>
                </tr>
                <tr >
                    <th>爆发力测试</th>
                    <td>{{Score2}}</td>
                </tr>
                <tr >
                    <th>耐力测试</th>
                    <td>{{Score3}}</td>
                </tr>
                <tr >
                    <th>总分</th>
                    <td>{{sunScore}}</td>
                </tr>
            </table>
        </div>
        <div ref="main" id="main"></div>
        <hr>
       <div>
           <div class="lead">教练建议：</div>
           <br>
           <div class="container-sm">
               <p>{{user.bodyhel}}
               </p>
           </div>
       </div>
        <br><br>
    </div>
</template>

<script>
    export default {
        name: "ShowScore",
        components:{
        },
        props:{
            user:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        computed:{
            sunScore(){
                return this.user.score1+this.user.score2+this.user.score3
            },
            Score1(){
                return this.user.score1==0 ? '未考核':this.user.score1
            },
            Score2(){
                return this.user.score2==0 ? '未考核':this.user.score2
            },
            Score3(){
                return this.user.score3==0 ? '未考核':this.user.score3
            }
        },
        methods:{
            myEcharts(){
                // 基于准备好的dom，初始化echarts实例
                const _this=this

                const myChart = this.$echarts.init(_this.$refs.main);
                // console.log(_this);
                // 指定图表的配置项和数据
                const option = {
                    title: {
                        text: '各项目成绩占比',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: 'rgba(65,65,65,0.89)'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} : {c}分 ({d}%)'
                    },
                    legend:{
                        bottom:"10%",
                        right:"7%",
                    },
                    series: [
                        {
                            name: '成绩(占比)查询',
                            label: {
                                normal: {
                                    position: 'inner',
                                    show : false
                                }
                            },
                            type: 'pie',
                            radius: '80%',
                            center: ['48%', '50%'],
                            data: [
                                {value: _this.user.score1, name: '力量测试'},
                                {value: _this.user.score2, name: '爆发力测试'},
                                {value: _this.user.score3, name: '耐力测试'},
                            ].sort(function (a, b) { return a.value - b.value; }),
                            roseType: 'radius',
                            animationType: 'scale',

                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        },
        mounted() {
            this.myEcharts();
        }
    }
</script>

<style scoped>
    .container{
        padding-right: 10px;
    }
    #showscore{
        position: relative;
        top: 20px;
        width: 95vw;
    }
    #main{
        position: relative;
        top: 20px;
        width: 100vw;
        height:500px;
    }
</style>