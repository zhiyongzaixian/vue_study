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
		<keep-alive :exclude='["Personal"]'>
			<component :is='comName' :getHomeMsg='getHomeMsg'></component>
		</keep-alive>
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'
import Personal from './components/Personal/Personal.vue'
export default {
	data(){
		return {
			comName: 'Home',
		}
	},
	components:{
		Home: Home, 
		Personal // 同步加载
		// Personal: () => import('./components/Personal/Personal.vue') // 异步加载
	},
	methods: {
		changeTab(comName){
			this.comName = comName
		},
		getHomeMsg(msg){
			console.log(msg)
		}
	},
	errorCaptured(errObj, errVM, errMsg){
		console.log('获取来自后代组件的错误。。。')
		// console.log(errObj.message)
		// console.log(errVM)
		// console.log(errMsg)
		
		// Home子组件实例.getHomeMsg(Home子组件实例.msg)
		errVM.getHomeMsg(errVM.msg)
		return false // 局部捕获，阻止错误传播到全局
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
