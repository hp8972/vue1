<template id="getup">
	<div>
		<h2>个人设置</h2>
		<mt-cell title="账号" to="//github.com" is-link></mt-cell>
		<mt-cell title="个人信息" to="//github.com" is-link></mt-cell>
		<mt-cell title="常用信息" to="//github.com" is-link></mt-cell>
		<mt-cell title="推送设置" to="//github.com" is-link></mt-cell>
		<h2>应用相关</h2>
		<mt-cell title="意见反馈" to="//qyer.com" is-link></mt-cell>
		<mt-cell title="评价穷游" to="//qyer.com" is-link></mt-cell>
		<mt-cell title="分享穷游" to="//qyer.com" is-link></mt-cell>
		<mt-cell title="关于穷游" to="//qyer.com" is-link></mt-cell>
	</div>
</template>

<script>
	export default{
		name:'getup',
		data(){
			return{
				msg:'设置'
			}
		},
		mounted:function(){
			this.$emit('to-parent',this.msg)
		}
	}
</script>

<style>
	h2{
		font-size: 24px;
		padding: 10px 0 0 10px;
	}
	
	
	
	
	
</style>