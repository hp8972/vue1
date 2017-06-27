<template id="zylsheqv">
	<div id="zylzyl">
		<mt-header title="zystr">
		  <mt-button v-link="'/'" icon="back" slot="left" >返回</mt-button>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<mt-swipe :auto="4000" class="swipe">
		  <mt-swipe-item><img src="src/img/z_timg1.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="src/img/z_timg2.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="src/img/z_timg3.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="src/img/z_timg4.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="src/img/z_timg5.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="src/img/z_timg6.jpg"/></mt-swipe-item>
		</mt-swipe>
		<h2>热门线路·大航海时代</h2>
		<router-link to="/Hp">
		<div class="font">
			<div class="zfl">
				<p class="zfon"><i class="iconfont icon-rihan"></i></p>
				<p>日韩</p>
			</div>
			<div class="zfl">
				<p class="zfon" style="background: #fd826f;"><i class="iconfont icon-taiguoyiliao"></i></p>
				<p>东南亚</p>
			</div>
			<div class="zfl">
				<p class="zfon" style="background: #ffca48;"><i class="iconfont icon-mg-AZDF"></i></p>
				<p>中东</p>
			</div>
			<div class="zfl">
				<p class="zfon" style="background: #f8735f;"><i class="iconfont icon-meiguoyiliao"></i></p>
				<p>美国</p>
			</div>

		</div>
		</router-link>
		<div class="font">
			<div class="zfl">
				<p class="zfon" style="background: #f8715e;"><i class="iconfont icon-gangaotai"></i></p>
				<p>港澳台</p>
			</div>
			<div class="zfl">
				<p class="zfon" style="background: #41dded;"><i class="iconfont icon-mg-europe"></i></p>
				<p>欧洲</p>
			</div>
			<div class="zfl">
				<p class="zfon" style="background: #1fdab1;"><i class="iconfont icon-nanjizhou"></i></p>
				<p>南极</p>
			</div>
			<div class="zfl">
				<p class="zfon" style="background: #ffca48;"><i class="iconfont icon-_xinxilan"></i></p>
				<p>新西兰</p>
			</div>
		</div>
		<div class="zycity">
			<div class="zyc1">福冈</div>
			<div class="zyc1">长崎</div>
			<div class="zyc1">冲绳</div>
			<div class="zyc1">熊本</div>
		</div>
		<div class="zycity">
			<div class="zyc1">港澳台</div>
			<div class="zyc1">欧洲</div>
			<div class="zyc1">首尔</div>
			<div class="zyc1">新加坡</div>
		</div>
		<div>
			<h2>优质邮轮公司</h2>
		</div>
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide">
		    	<img src="src/img/z_timg1.jpg"/>
		    </div>
		    <div class="swiper-slide">
		    	<img src="src/img/z_timg2.jpg"/>
		    </div>
		    <div class="swiper-slide">
		    	<img src="src/img/z_timg3.jpg"/>
		    </div>
		    <div class="swiper-slide">
		    	<img src="src/img/z_timg4.jpg"/>
		    </div>
		    <div class="swiper-slide">
		    	<img src="src/img/z_timg5.jpg"/>
		    </div>
		    <div class="swiper-slide">
		    	<img src="src/img/z_timg6.jpg"/>
		    </div>
		  </div>
		</div>
		<div><h2>热门精选</h2></div>
		<div>
			<ul class="list">
				<li v-for="item in arr">
					<img :src="item.img"/>
					<div >
						<h3>{{item.title}}</h3>
						<span>{{item.biaoqian}}</span>
						<span class="price">{{item.price}}元起</span>
					</div>
				</li>
				
			</ul>
		</div>
	</div>	
		
</template>

<script>
	
	export default{	

		name:'zylsheqv',
		data(){
			return{
				zystr:'游轮',
				arr:[]
			}
		},
		
		mounted(){
			var _this = this;
		var mySwiper = new Swiper('.swiper-container', {
				slidesPerView: 2.5,
				direction: 'horizontal',
				spaceBetween:10,
				pagination: '.swiper-pagination'
			})
		 axios.get("/src/json/lunchuan.json").then(function(res){
		 	_this.arr=res.data
		
		 })
	
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
#zylzyl .swipe{
	height: 2.3rem;
	width: 100%;
	
}
#zylzyl .swipe img{
	width: 100%;
	height: 100%;
}
#zylzyl h2{
	font-size: 0.3rem;
	line-height: 0.8rem;
	text-indent: 1em;
}
#zylzyl .font{
	height: 1.3rem;
	width: 100%;
	
	display: flex;
	flex-flow:row;
}
#zylzyl .zfl{
	flex: 1;
	text-align: center;
	margin: 0 auto;
}
#zylzyl .zfl p{
	font-size: 0.12rem;
}
#zylzyl .zfon{
	height: 0.7rem;
	width: 0.7rem;
	border-radius: 50%;
	background: #30e1ba;
	text-align: center;
	line-height: 0.7rem;
	margin: 0 auto;
	margin-bottom: 0.1rem;
	margin-top: 0.1rem;
}
#zylzyl .zfon i{
	color: #fff;
}
#zylzyl .zycity{
	display: flex;
	flex-flow:row;
	font-size: 0.2rem;
}
#zylzyl .zyc1{
	flex: 1;
	text-align: center;
	background: #f0f0f0;
	margin:0.1rem;
	padding: 0.07rem 0.01rem;
	color: #4c4d4f;
}
#zylzyl .swiper-container{
	width: 95vw;
	height: 1rem;

}
#zylzyl .swiper-container img{
	
	width:100%;
	height: 100%;
}
#zylzyl .list li{
	list-style: none;
	height: 2rem;
	width: 95vw;
	margin: 2.5vw;
	font-size: 0.14rem;
}
#zylzyl .list img{
	width: 1.5rem;
	height: 1.5rem;
	float: left;
	margin-right: 0.2rem;
}
#zylzyl .list h3{
	margin-bottom: 0.2rem;
	line-height: 0.4rem;
}
#zylzyl .list .price{
	float: right;
	font-size: 0.24rem;
	color: #DF5000;
}
</style>