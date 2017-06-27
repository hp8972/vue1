<template id="com">

	<div>
		
		<div id="wjiguang">
			<div id="wimg">
				<router-link to="/login"><img src="../assets/2.jpg" /></a></router-link>
			</div>
			<p>{{dd}}</p>
		</div>
		
		<div id="whahah">
			<div>
				<img src="../assets/favorites.png"/>
				<p>我的收藏</p>
			</div>
			<div>
				<img src="../assets/download.png"/>
				<p>下载的锦囊</p>
			</div>
			<div>
				<img src="../assets/logistic.png"/>
				<p>我的行程</p>
			</div>
		</div>
		<div class="gemo"></div>
		<ul class="wlist">
			<li class="wli1">我的订单</li>
			<li class="wli2">我收藏的折扣</li>
			<li class="wli3">我的优惠劵</li>
		</ul>
		<div class="gemo"></div>
		<ul class="wlist">
			<li class="wli4">我的足迹</li>
			<li class="wli5">我的问答</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'com',
		data(){
			return{
				dd:'登录体验更多'
			}
		},
		mounted(){
//			console.log(location.search)
            var cc=location.search.replace("?","").split("=")[1]
             if(cc){
             	this.dd=location.search.replace("?","").split("=")[1]
             }else{
             	this.dd='登录体验更多'
             }
			
			console.log(this.dd)
//			if(this.dd.length==""){
//				this.dd='登录体验更多'
//			}else{
//				this.dd=location.search.replace("?","").split("=")[1]
//			}
		}
	}
</script>

<style>
	#whahah{
		display: flex;flex-direction: inherit;
	}
	#whahah>div{
		flex: 1;text-align: center;
	}
	#whahah>div img{
		width: 30px;
	}
	#whahah>div p{
		font-size: 16px;
	}
#wjiguang{
	width: 100%;
	height: 200px;
	background: url(../assets/1.jpg) no-repeat;
	background-size: 100%;
	position: relative;
}
#wimg img{
	width: 50px;
	height: 50px;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	border-radius: 50%;
}
#wjiguang p{
	text-align: center;
	position: absolute;
	top: 140px;
	color: #fff;
	left: 38%;
	font-size: 16px;
}
.wlist li{
	font-size: 16px;
	height: 30px;
	margin-top: 5px;
	padding-left: 40px;
	line-height: 25px;
	border-bottom: 1px solid #ccc;
}
.wlist .wli1{
	background: url(../assets/form.png) no-repeat 10px center;
	background-size: 20px 20px;
}
.wlist .wli2{
	background: url(../assets/text.png) no-repeat 10px center;
	background-size: 20px 20px;
}
.wlist .wli3{
	background: url(../assets/training.png) no-repeat 10px center;
	background-size: 20px 20px;
}
.wlist .wli4{
	background: url(../assets/help.png) no-repeat 10px center;
	background-size: 20px 20px;
}
.wlist .wli5{
	background: url(../assets/process.png) no-repeat 10px center;
	background-size: 20px 20px;
}
.gemo{
	width: 100%;
	height: 20px;
	background-color: #ddd;
}
</style>