import Vue from 'vue'
import Router from 'vue-router'

import componentsA from './components/componentsA'
import componentsB from './components/componentsB'
import parent from './components/parent'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/componentsA',
			name:'componentsA',
			component:componentsA
		},
		{
			path:'/componentsB',
			name:'componentsB',
			component:componentsB
		},{
			path:'/parent',
			name:'parent',
			component:parent
		}
	]
})
