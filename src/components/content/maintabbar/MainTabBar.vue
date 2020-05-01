<template>
	<div id="main-tabbar">
		<tab-bar>
			<tab-bar-item path='/home' activeColor='blue'>
				<img src="~assets/img/tabbar/HOME.svg" alt="" slot="item-icon" >
				<img src="~assets/img/tabbar/shouye (1).svg" alt="" slot="item-icon-active">
				<div slot='item-text'>首页</div>
			</tab-bar-item>
			<tab-bar-item path='/editinfo' v-if="showEditInfo">
				<img src="~assets/img/tabbar/xitongguanli.svg" alt="" slot="item-icon" >
				<img src="~assets/img/tabbar/xitongguanli (1).svg" alt="" slot="item-icon-active">
				<div slot='item-text'>信息管理</div>
			</tab-bar-item>
			<tab-bar-item path='/eval' activeColor='pink' class="suojin">
				<svg  slot="item-icon" class="bi bi-chat-square-dots" width="1.7em" height="1.7em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" clip-rule="evenodd"/>
					<path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
				</svg>
				<svg slot="item-icon-active" class="bi bi-chat-square-dots-fill" width="1.7em" height="1.7em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clip-rule="evenodd"/>
				</svg>
				<div slot='item-text'>留言</div>
			</tab-bar-item>
			<tab-bar-item path='/profile' activeColor='deepPink'>
				<img src="~assets/img/tabbar/yonghuguanli.svg" alt="" slot="item-icon" >
				<img src="~assets/img/tabbar/yonghuguanli (1).svg" alt="" slot="item-icon-active">
				<div slot='item-text'>我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		},
		computed:{
			showEditInfo(){
				return Object.keys(this.$store.state.user).length>0 && this.$store.state.user.qx>0
			}
		}
	}
</script>

<style>
.suojin{
	position: relative;
	padding-top: 5.3px;
}
</style>
