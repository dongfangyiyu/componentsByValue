<template>
	<div>
		<div>我是first.vue</div>
		<button @click="firstToSecond">点击传值给second.vue</button>
	</div>
</template>

<script>
	import Bus from '../bus.js'
	export default{
		data(){
			return{
				msg:'我是first.vue传到second.vue的参数'
			}
		},
		methods:{
			firstToSecond(){
				Bus.$emit('emitToSecond',this.msg)
			}
		}
	}
</script>

<style>
</style>
