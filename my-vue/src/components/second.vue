<template>
	<div>
		<div>我是second.vue</div>
		{{info}}
	</div>
</template>

<script>
	import Bus from '../bus.js'
	export default{
		data(){
			return{
				info:''
			}
		},
		mounted(){
			const that = this;
			Bus.$on('emitToSecond',function(data){
				that.info = data
			})
		}
	}
</script>

<style>
</style>
