<template>
	<div>
		<div>------------------父子组件之间的传值----------------------</div>
		<div>我是父组件</div>
		<div>大声告诉我你爱谁：{{loveWho}}</div>
		<children @emitToParent='parentSayLove' message1='我是直接参数' v-bind:message2='msg' :message3='obj'></children>
	</div>
</template>

<script>
	import Children from './children'
	export default{
		components:{
			Children
		},
		data(){
			return{
				msg:'我是父组件的参数',
				loveWho:''
			}
		},
		methods:{
			parentSayLove(data){
				this.loveWho = data
			}
		},
		created(){
			this.obj = {a:'1',b:'2',c:'3'}
		}
	}
</script>

<style>
</style>
