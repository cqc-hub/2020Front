<template>
    <div class="tab-control">
<!--			<div v-for="(item,index) in titles"-->
<!--					 class="tab-control-item" :class="{active: index == currentIndex}" :key="item">-->
<!--				<span>{{item}}</span>-->
<!--			</div>-->
			<div v-for="(item,index) in titles"  class="tab-control-item" :key="item">
				<span :class="{
					active:index==currentIndex}"
							@click="clickItem(index)"
							class="tab-control-c"
				>
					{{item}}</span>
			</div>
		</div>
</template>

<script>
    export default {
        name: "TabControl",
				data(){
        	return{
        		currentIndex:0
					}
				},
			methods:{
				clickItem(index){
					this.currentIndex=index
					this.$emit('TabControlClick',index)
				}
			},
				props:{
						titles:{
							type:Array,
							default(){
								return[]
							}
						}
				}
    }
</script>

<style scoped>
	.active{
		color: #003c8bb0;
		border-bottom: 3px solid rgba(43, 31, 34, 0.78);
		border-radius: 3px;
	}
	.tab-control{
		display: flex;
		text-align: center;
		justify-content: space-between;
		font-size: 17px;
		background-color: rgba(255,255,255,.9);
	}
	.tab-control-item{
		flex: 1;
		height: 40px;
		position: relative;

	}
	.tab-control-item>span{
		padding: 5px;
	}
	.tab-control-c{
		display: inline-block;
		transform: translateY(15%);
	}
</style>
