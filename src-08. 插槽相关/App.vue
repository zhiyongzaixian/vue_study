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
		<Home ref='home'>
			 <template v-slot:left='mySlotProps'>
			    <h1>Home左护法 {{mySlotProps.user.firstName}}</h1>
			  </template>
				<template v-slot:right='{user}'>
				   <h1>Home右护法 {{user.lastName}}</h1>
				 </template>
				 
				 <template>
					 <p>我是导入的内容。。。</p>
				 </template>
		</Home>
		<Personal @xx='handleXX'></Personal>
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
		handleXX(){
			console.log('App @绑定')
		}
	},
	beforeMount() {
		console.log(this)
		this.$Bus.$on('myBus', (msg) => {
			console.log('事件总线自定义事件被触发')
		})
	},
	mounted() {
		this.$refs.home.$on('myEvent', (msg) => {
			console.log('自定义事件被触发')
			console.log('App组件： 获取到来自Home组件的数据', msg)
		})
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
