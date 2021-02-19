<template>
  <div id="app">
    <h1>App 组件</h1>
		<!-- tab导航 -->
		<div class="tabs">
			<div class="tabItem" @click="changeTab('Home')">
				Home 链接
			</div>
			<div class="tabItem" @click="changeTab('Personal')">
				Personal 链接
			</div>
		</div>
		
		<!-- 内容区 -->
		
		<!-- 动态组件 -->
		<component :is='comName'></component>
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'
// import Personal from './components/Personal/Personal.vue'
export default {
	data(){
		return {
			comName: 'Home'
		}
	},
	components:{
		Home: Home, 
		Personal: () => import('./components/Personal/Personal.vue')
		// Personal // 同步加载
	},
	methods: {
		changeTab(comName){
			this.comName = comName
		}
	}
}
</script>

<style lang="stylus">
	.tabs
		display flex
		.tabItem
			width 50%
			height 80px
			line-height 80px
			text-align center
			border 1px solid #333333
			box-sizing border-box
</style>
