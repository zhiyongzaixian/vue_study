// 注册路由
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Buy from '../pages/Buy/Buy.vue'
import Cart from '../pages/Cart/Cart.vue'
import Login from '../pages/Login/Login.vue'


/* 
	元信息： 
		1. 信息： 用来描述指定的事物，人等。
		2. 元信息： 用来描述信息本身的信息
		3. 示例： 
			- 信息： 他是伟大的NBA球星，他的名字叫kobe
			- 元信息： 以上的信息是用来描述一个NBA球星的
			
 
 */
const routes = [
	// {
	// 	path: '路由路径',
	// 	component: 路由组件
	// }
	
	{
		path: '/home/:id/:a',
		component: Home,
		name: 'Home',
		meta: {
			isShowFooter: true
		}
	},
	
	{
		path: '/category',
		component: Category,
		name: 'Category',
		meta: {
			isShowFooter: true
		}
	},
	{
		path: '/buy/:id',
		component: Buy,
		meta: {
			isShowFooter: true
		},
		props: true // 声明将params参数导入到组件内部的props对象中
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			isShowFooter: false
		},
		// props: { // 使用对象的模式，可以自定义键值对，但是没有办法获取当前路由信息
		// 	a: 1,
		// 	b: 2
		// }
		
		
		// 通过函数的形式，既可以自定义键值对，同时可以获取当前的路由信息内容
		props: (route) => ({a: 1, b: 2, path: route.path})
	},
	{
		path: '/login',
		component: Login
	}
]

export default routes