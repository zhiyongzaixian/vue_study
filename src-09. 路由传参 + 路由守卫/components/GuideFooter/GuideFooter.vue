<template>
	<div id="guide">
		<div class="guideItem">
			<!-- 静态路由 -->
			<!-- <router-link to="/home/1/2">首页</router-link> -->
			
			<!-- 动态路由 params + name -->
			<router-link :to="{name: 'Home', params: {id: 123, a: 456, b: 789}}">首页</router-link>
			
			<!-- 动态路由 params + path不能使用 -->
			<!-- <router-link :to="{path: '/home', params: {id: 123, a: 456, b: 789}}">首页</router-link> -->
		</div>
		<div class="guideItem">
			<!-- <router-link to="/category?a=1&b=2">分类</router-link> -->
			
			<!-- 动态路由 query + path -->
			<!-- <router-link :to="{path: '/category', query: {a: 123, b: 456}}">分类</router-link> -->
			<!-- 动态路由 query + name -->
			<router-link :to="{name: 'Category', query: {a: 123, b: 456}}">分类</router-link>
			
			
		</div>
		<div class="guideItem">
			<router-link to="/buy/1">值得买</router-link>
		</div>
		<div class="guideItem">
			<router-link to="/cart">购物车</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#guide
		position fixed
		bottom 0
		width 100%
		height 50px
		display flex
		border-top 1px solid #333
		.guideItem
			width 25%
			height 100%
			line-height 50px
			text-align center
			
			
</style>
