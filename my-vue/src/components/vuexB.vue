<template>
	<div>
		<div>我是vuexB中的city参数：{{city}}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			city(){
				return this.$store.state.city
			}
		}
	}
</script>

<style>
</style>
