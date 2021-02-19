<template>
	<div>
		<p>Home 组件</p>
		<button @click="handleClick">触发自定义事件</button>
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
		methods: {
			handleClick(){
				this.$emit('myEvent', this.msg)
				this.$Bus.$emit('myBus', this.msg)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
