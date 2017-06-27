<template id="Hplist">
	<div>
		<ul id="country">
		<router-link to="/" v-for="(item,index) in arr1">
			<li>{{item}}</li>
		</router-link>
			
		</ul>
	</div>
</template>

<script>
	export default{
		name:"Hplist",
		data(){
			return{
				arr1:["悉尼","墨尔本","塞班岛","帕劳","毛里求斯","台北","摩洛哥","塞舌尔","新西兰","斯里兰卡","高雄市","更多"]
			}
		}
	}
</script>

<style>
	*{
		margin: 0;padding: 0;
	}
	#country{

	}
	#country a{
		margin-top: -0.3rem;
	}
	#country li{
		background: #FFFFFF;float: left;
		
		list-style: none;font-size: 0.25rem;margin: 0.15rem;
		display: inline-block;height: 0.4rem;width: 19vw;line-height: 0.4rem;
		border: 1px solid #ddd;text-align: center;color: #222222;
		}
</style>