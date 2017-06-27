<template id="header">
	<div>
		  <mt-header fixed :title="str" @click.native="tap">
		  <router-link to="/" slot="left">
		    <mt-button icon="back" v-if="isShow">返回</mt-button>
		  </router-link>
		</mt-header>

 <!--<v-i></v-i>-->

<!--<router-view style="margin-top: 42px;"　@to-parent='getdata'></router-view>-->

	</div>
	
</template>

<script>
//	import index from "./index.vue"
	export default{
		name:'header',
		data(){
			return{
				str:'穷游',
				isShow:false
			}
		},
//		components:{
//		    "v-i":index
//		},
//		methods:{
//			getdata:function(res){
//				this.str=res
//				this.isShow=true
//			},
//			tap:function(){
//				this.str="走秀网"
//				this.isShow=false
//			}
//		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
</style>