<template>
	<div>
		Personal 组件
		<button @click="handleClick">测试</button>
	</div>
</template>

<script>
	export default {
		methods: {
			handleClick(){
				this.$emit('xx')
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
