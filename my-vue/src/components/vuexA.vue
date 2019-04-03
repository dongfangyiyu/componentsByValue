<template>
	<div>
		<div>我是vuexA中city参数：{{city}}</div>
		<input type="text" :value="city" @change="change">
	</div>
</template>

<script>
	export default{
		methods:{
			change(e){
				this.$store.dispatch('setCityName',e.target.value)
			}
		},
		computed:{
			city(){
				return this.$store.getters.getCity
			}
		}
	}
</script>

<style>
</style>
