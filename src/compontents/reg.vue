<template id="reg">
	<div>
		<div class="whead"><img src="../assets/1.jpg"/></div>
		<mt-field placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-field placeholder="请再次输入密码" type="password" v-model="password1"></mt-field>
		<mt-button size="large" type="danger" @click="reg" style="margin-top: 20px;">注册</mt-button>
	</div>
</template>

<script>
	export default{
		name:'reg',
		data(){
			return{
				msg:'注册',
				username:'',
				password:'',
				password1:''
			}
		},
		mounted:function(){
			this.$emit('to-parent',this.msg)
		},
		methods:{
			reg:function(){
//				console.log(this.username)
//				console.log(this.password)
//				console.log(this.password1)
				var _this=this;
				if(/^[a-z]\w{5,15}/g.test(this.username)){
//					alert(1)
					if(/^[a-z]\w{5,15}/g.test(this.password)){
						if(this.password != this.password1){
							alert("两次密码不一致，请重新输入！")
						}else{
							
							$.ajax({
					            type:'get',
					            url:'http://datainfo.duapp.com/shopdata/userinfo.php',
					            data:{status:'register',userID:_this.username,password:_this.password},
					            dataType:'json',
					            success:function(data){
					                console.log(data)
					                if(data==0){
					                    alert('用户名重名')
					                }
					                if(data==1){
//					                    alert('恭喜你，注册成功')
					                    _this.$router.push('/login')
					                }
					                if(data==2){
					                    alert('数据库报错')
					                }
					            }
					        })
						}
					}else{
						alert("请输入以字母开头的6-16位密码！")
					}
				}else{
					alert("请输入以字母开头的6-16位账号！")
				}
			}
		}
	}
</script>

<style>
.whead{height: 200px;}
.whead img{width:100vw;height: 612px;}
</style>