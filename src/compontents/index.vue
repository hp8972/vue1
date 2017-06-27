<template id="index">
	<div>
		<div style="margin-top: 40px">
			<mt-swipe :auto="4000" class="box" id="box">
				<mt-swipe-item class="aa" v-for="(item,index) in arr"><img :src='item["img"]' /></mt-swipe-item>
				<!--<mt-swipe-item class="bb"><img src="https://pic.qyer.com/ra/img/14953594435047" /></mt-swipe-item>
				<mt-swipe-item class="cc"><img src="https://pic.qyer.com/ra/img/14953594435047" /></mt-swipe-item>-->
			</mt-swipe>
		</div>
		<div style="width: 90vw;height: 60px;margin: 0px auto;margin-left:40px ">
			<input style="" type="text" placeholder="搜索目的地、锦囊、游记、特价、穷游er" name="" id="" value="" />
		</div>
		<router-link to="/Header">
		<div class="dizhi">
			<div class="zuijin">
				<p class="p1">最近访问</p>
				<h2>慕尼黑</h2>
				<ul>
					<li>景点美食</li>
					<li>商城</li>
					<li>锦囊</li>
					<li>地图</li>
				</ul>
			</div>
			<ul class="jingdian">
				<li>首尔</li>
				<li>东京</li>
				<li>墨尔本</li>
			</ul>
		</div>
		</router-link>
		
		<div class="swiper-container s_c">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item,index) in arr1"><img :src='item["img"]' /></div>
		    </div>
		    <div class="swiper-pagination" style="display: none;"></div>
		</div>
		<router-link to="/home">
		<p class="p2">现在出发</p>
		<ul class="list">
			<li><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=235846731,490987209&fm=23&gp=0.jpg" />
				<h2>
					在境外旅游时，有哪些瞬间让你感觉到“支付宝真的逆天了”
				</h2>
				<p>我郑重的警告支付宝，你们再不普及全球，我真的快被硬币重哭了</p>
			</li>
			<li><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=235846731,490987209&fm=23&gp=0.jpg" />
				<h2>
					在境外旅游时，有哪些瞬间让你感觉到“支付宝真的逆天了”
				</h2>
				<p>我郑重的警告支付宝，你们再不普及全球，我真的快被硬币重哭了</p>
			</li>
			<li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3559262329,3512921312&fm=23&gp=0.jpg" />
				<h2>
					在境外旅游时，有哪些瞬间让你感觉到“支付宝真的逆天了”
				</h2>
				<p>我郑重的警告支付宝，你们再不普及全球，我真的快被硬币重哭了</p>
			</li>
			<li><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2532196320,2647011326&fm=23&gp=0.jpg" />
				<h2>
					在境外旅游时，有哪些瞬间让你感觉到“支付宝真的逆天了”
				</h2>
				<p>我郑重的警告支付宝，你们再不普及全球，我真的快被硬币重哭了</p>
			</li>
		</ul>
		</router-link>
	</div>
	
</template>

<script>
	
	
//	import {swiper,swiperSlide} from 'vue-awesome-swiper'
//
//	import axios from 'axios';
	
	
	
	export default {
		name: 'index',
		data() {
			return {
				arr:"",
				arr1:""
			}
		},
	  mounted(){
		  	var _this=this;
          axios.get("src/json/index.json")
		  	.then(function(res){
		  	
		  		_this.arr=res.data.lun;
		  		_this.arr1=res.data.swi;
		  		console.log(res.data)
		  		setTimeout(()=>{
		  			var mySwiper = new Swiper('.swiper-container', {
						slidesPerView: 2.5,
						direction: 'horizontal',
						spaceBetween:20,
						pagination: '.swiper-pagination',
						freeMode : true,
						freeModeFluid : false
		  		},500)
		  		
		
			})
		  	})
		  	
		  	
		  	
	  	
 		}
	  

	}
	
</script>

<style>
	.box {
		width: 100%;
		height: 3rem;
	}
	
	.aa {
		width: 100%;
		height: 3rem;
		background: #0000FF;
	}
	
	.bb {
		width: 100%;
		height: 3rem;
		background: #008000;
	}
	
	.cc {
		width: 100%;
		height: 3rem;
		background: #1B6D85;
	}
	
	.box img {
		width: 100%;
		height: 100%;
	}
	
	input {
		border: none;
		width: 90vw;
		height: 0.5rem!important;
		border: 1px solid #ccc;
		vertical-align: top;
		margin-top: 10px;
	}
	
	.dizhi {
		width: 90vw;
		height: 250px;
		margin: 0px auto;
		border: 1px solid #ccc;
		font-size: 14px;
	}
	
	.zuijin {
		color: #fff;
		background: #009689;
		width: 100%;
		height: 180px;
	}
	
	.p1 {
		text-align: center;
		padding: 15px 0;
	}
	
	.zuijin h2 {
		text-align: center;
		margin-bottom: 25px;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	.zuijin ul li {
		float: left;
		margin-left: 40px;
	}
	
	.jingdian {
		margin-top: 20px;
	}
	
	.jingdian li {
		margin-left: 15px;
		width: 90px;
		height: 30px;
		background: #C0C0C0;
		border-radius: 15px;
		float: left;
		text-align: center;
		line-height: 30px;
	}
	
	.s_c {
		width:90vw;
		height: 100px;
		margin-top: 20px;
	}
	

 .s_c img{
	width: 100%;
	height: 100%;
}
/*.swiper-slide{
	padding-left: 20px;
}*/
.s_c{
	padding-left: 20px;
	padding-right: 20px;
}
.p2{
	text-align: center;
	font-size: 14px;
	margin-top: 20px;
	margin-bottom: 20px;
}

.list img{
	width:100%;
	height: 150px;
}
.list h2{
	text-align: center;
	font-size: 20px;
}
.list p{
	width: 90vw;
	font-size: 14px;
	margin: 10px auto;
}
</style>