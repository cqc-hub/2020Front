<template>
    <div id="rules">
        <div class="line"></div>
        <div class="content">
            <div class="list-group">
                <div class="list-group-item"><span class="lead ">出 发</span></div>

                <a href="#" class="list-group-item">
                    <h4 class="list-group-item-heading"> <mark class="small">比赛小规则</mark></h4>
                </a>
                <p class="list-group-item-text">
                    <div  class="">            1、自由泳、蛙泳、蝶泳及个人混合泳的各项比赛必须从出发台起跳出发。当总裁判发出长哨音信号后，运动员应站到出发台上，当发令员发出“各就位”的口令后，运动员应至少有一只脚在出发台的前缘做好出发准备，手臂位置不限。当所有运动员都处于静止状态时，发令员发出“出发信号”。
                    </div>

                    <div class="boboo">            2、仰泳和混合泳接力项目应在水中出发，当总裁判发出第一声长哨音时，运动员应立即入水，当听到第二声长哨音，应立即返回池端的出发位置。当所有运动员做好出发准备时，发令员发出“各就位”的口令，当所有运动员都处于静止状态时，发令员发出“出发信号”。
                    </div>
                    <div class="boboo">            3、在奥运会、世界锦标赛以及其它国际泳联的比赛中，“各就位”的口令必须用英语，出发信号必须使用多个扩音器，在每个出发台设置一个。
                    </div>
                    <div class="boboo">            4、任何运动员如在“出发信号”发出前出发，应取消其比赛资格或录取资格。如果在“出发信号”发出后发现运动员抢码犯规，比赛应继续进行，在该组比赛结束后取消犯规运动员的录取资格。如果在“出发信号”发出前发现运动员抢码犯规，则不再发“出发信号”，但要将其他运动员召集回来，再次组织出发。
                    </div>
                </p>
            </div>
        </div>
        <div class="lineend"></div>
    </div>
</template>

<script>
    export default {
        name: "HomeRules"
    }
</script>

<style scoped>
#rules{
    padding: 5px 12px;
    color: #233233;

}
.content div{
}
.line,.lineend{
    border-bottom: 5px solid #525457;

}
    .tit{
        position: relative;
        padding-top: 5px;
    }
    .boboo{
        padding-top: 10px;
    }
    .contentit{
        font-weight: bolder;
        border: 1px solid black;
        text-align: center;
    }
    .tit{

    }
    .list-group p{
        display: inline-block;
    }
</style>