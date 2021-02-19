<template>
  <div id="app">
    
  </div>
</template>

<script>

export default {
	
	// 发请求可以在哪发送，通常在哪发送， why?
  data(){
		return {
			msg: '测试数据'
		}
	},
  beforeCreate() {
		console.log('--- beforeCreate -----')
		// 并没有实现数据劫持代理
		console.log(this.msg)
		// 面试题: 如何在beforeCreate 中获取data中的数据
		console.log(this.$options.data().msg)
  },
	created() {
		console.log('--- created -----')
		// 已经进行了数据劫持代理
		console.log(this.msg)
	},
	beforeMount() {
		
	},
	mounted() {
		// 在mounted发请求，处理数据，为的是不影响页面初始化渲染
	}
}
</script>

<style>

</style>
