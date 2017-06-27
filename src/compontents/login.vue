<template id="login">
	<div>
		<div class="whead"><img src="../assets/1.jpg"/></div>
		<mt-field placeholder="输入邮箱/用户名" v-model="username"></mt-field>
		<mt-field placeholder="输入密码" type="password" v-model="password"></mt-field>
		<p class="wp"><a href="http://www.qyer.html">忘记密码？</a></p>
		<mt-button size="large" type="primary" @click="login" style="margin-bottom: 10px;">登录</mt-button>
		<router-link to="/reg" style="text-decoration: none;"><mt-button size="large" type="danger">注册</mt-button></router-link>
	</div>
</template>

<script>
	export default{
		name:'login',
		data(){
			return{
				msg:'登录'
			}
		},
		mounted:function(){
			this.$emit('to-parent',this.msg)
		},
		methods:{
			login:function(){
//				console.log(this.username)
//				console.log(this.password)
				var _this=this
				$.ajax({
			        type:'get',
			        url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			        data:{status:'login',userID:_this.username,password:_this.password},
			        dataType:'json',
			        success:function(data){
		//	            console.log(data)
						if(_this.username !=''){
							if(data==0){
			                    alert('用户名不存在')
			                }else if(data==2){
			                    alert('密码不正确')
			                }else if(_this.username !='' || _this.password !=''){
//			                    alert('恭喜你，登录成功')
			                    location.href="index.html?user="+_this.username;
								_this.$router.push('/')
			                }
						}else{
							alert('请输入用户名')
						} 
			        }
			    })
			}
		}
	}
</script>

<style>
.whead{height: 200px;}
.whead img{width:100vw;height: 612px;}
.wp{
	text-align: center;
	font-size: 16px;
	color: blue;
	margin-bottom: 20px;
}
</style>