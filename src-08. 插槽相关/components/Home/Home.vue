<template>
	<div>
		<p>Home 组件</p>
		<button @click="handleClick">触发自定义事件</button>
		<slot name="left" :user='user'></slot>
		<p>------ 主公 -------</p>
		<slot name="right" :user='user'></slot>
		<br>
		<slot>我是默认的插槽数据</slot>
		<br>
		<br>
	</div>
</template>

<script>
	export default {
		props: ['getHomeMsg'],
		data(){
			return {
				msg: 'Home 子组件的数据',
				user: {
					firstName: 'curry',
					lastName:'stephe'
				}
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
