<template>
	<div>
		Home 组件
	</div>
</template>

<script>
	export default {
		props: ['getHomeMsg'],
		data(){
			return {
				msg: 'Home 子组件的数据'
			}
		},
		mounted() {
			// console.log('Home mounted')
			console.log(a)
			this.getHomeMsg(this.msg)
		},
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
