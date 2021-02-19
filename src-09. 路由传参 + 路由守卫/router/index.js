
import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册
Vue.use(VueRouter)

import routes from './routes'
// 1. 生成路由器
const router = new VueRouter({
	routes
})

const isLogin = true
// 全局的前置守卫
router.beforeEach((to, from, next) => {
  console.log('--- beforeEach 全局的前置守卫 ---')
	// console.log(from) // 路由发起信息对象   贫僧从东土大唐而来
	// console.log(to) // 路由跳转目标信息对象  要去西天取经，途径贵宝地， 望发放。。。。
	// console.log(next) // 放行函数           ‘通关文牒’
	/* 
	 使用场景： 
		用户是否登录身份验证
		需求： 
			跳转桌子购物车页的时候需要判用户是否登录
			1. 如果登录就访问购物车
			2. 如果没有登录就跳转至登录页面
			3. isLogin: false || true
	 
	 */
	
	// 判断用户是否登录
	if(isLogin){
		 next();
	}else {
		 // 未登录
		 if(to.path === '/cart'){
			 next('/login')
		 }else {
			 next()
		 }
	}
})

// 全局的解析守卫
router.beforeResolve ((to, from, next) => {
 console.log('--- beforeResolve 全局的解析守卫 ---')
 	next();
})

// 全局后置钩子
router.afterEach((to, from) => {
  console.log('--- afterEach 全局后置钩子 ---')
})



export default router