<template>
	<div>
		<h2>Cart 组件</h2>
		<p>props对象模式接收的路由参数： {{a}} -- {{b}} -- {{path}}</p>
	</div>
</template>

<script>
	export default {
		props: ['a', 'b', 'path']
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>
