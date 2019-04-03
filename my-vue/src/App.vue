<template>
  <div id="app">
		<div>----------------非父子组件之间的传值----------------------</div>
		<First></First>
		<Second></Second>
		<hr />
		<router-view></router-view>
		<hr />
		<div>-----------------vuex传值---------------------------</div>
		<vuexA></vuexA>
		<vuexB></vuexB>
  </div>
</template>

<script>
import mainVue from './components/main.vue'
import First from './components/first.vue'
import Second from './components/second.vue'
import vuexA from './components/vuexA'
import vuexB from './components/vuexB'
export default {
  name: 'app',
  components: {
    mainVue,
		First,
		Second,
		vuexA,
		vuexB
  },
  methods: {
	
  },
  computed: {
  	
  },
}
</script>

<style>

</style>
