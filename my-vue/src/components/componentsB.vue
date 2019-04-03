<template>
	<div>
		<div>我是组件B</div>
	</div>
</template>

<script>
	export default{
		created(){
			this.getRouterData()
		},
		methods: {
			getRouterData(){
				const que = this.$route.query
				console.log(que)
			}
		},
	}
</script>

<style>
</style>
