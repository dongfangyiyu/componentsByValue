<template>
	<div>
		<div>我是组件A</div>
		<button @click='routerToB1'>方式一跳转到组件B</button>
		<button @click='routerToB2'>方式二跳转到组件B</button>
		<button @click='routerToB3'>方式三跳转到组件B</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				person:{name:'Gene',age:'18',sex:'male'}
			}
		},
		methods: {
			routerToB1() {
				this.$router.push({
					path:`componentsB/${this.person.name}/${this.person.age}/${this.person.sex}`
				})
			},
			routerToB2(){
				this.$router.push({
					name:'componentsB',
					params:{
						par:'我是通过params传到组件B的参数'
					}
				})
			},
			routerToB3(){
				this.$router.push({
					path:'/componentsB',//name:'componenetsB'
					query:{
						que:'我是通过query传到组件B的参数'
					}
				})
			}	
		},
	}
</script>

<style>
</style>
