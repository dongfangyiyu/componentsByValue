<template>
	<div style="margin-top: 100px;">
		<div>我是子组件</div>
		<div>{{message1}}</div>
		<div>{{message2}}</div>
		<div>{{message3}}</div>
		<button @click='ChildToParent'>点我传爱</button>
	</div>
</template>

<script>
	export default{
		props:['message1','message2','message3'],
		data(){
			return{
				loud:'I love xx'
			}
		},
		methods:{
			ChildToParent(){
				this.$emit('emitToParent',this.loud)
			}
		},
		created(){
			console.log(this.message3)
		}
	}
</script>

<style>
</style>
