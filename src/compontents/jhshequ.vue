<template>
	<div id="jhshequ">
		<p class="jhpp" fixed >{{str}}</p>
		<div class="jhbox">
			<router-link to="/jhqian">
			<ul>
				<li>
					<img src="../assets/images/IMG_6248_03.png"/>
					<p>签证专版</p>
				</li>
				<li>
					<img src="../assets/images/IMG_6248_05.png"/>
					<p>穷游问答</p>
				</li>
				<li>
					<img src="../assets/images/IMG_6248_07.png"/>
					<p>结伴旅行</p>
				</li>
				<li>
					<img src="../assets/images/IMG_6248_09.png"/>
					<p>旅行摄影</p>
					
				</li>
				<li>
					<img src="../assets/images/IMG_6248_11.png"/>
					<p>福利社</p>
					
				</li>
			</ul>
			</router-link>
		</div>
		
		<div class="jhbox1">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><img src="../assets/images/IMG_6248_03_03.png"/></div>
			        <div class="swiper-slide"><img src="../assets/images/IMG_6248_03_05.png"/></div>
			        <div class="swiper-slide"><img src="../assets/images/IMG_6251_03.png"/></div>
			    </div>
			</div>
		</div>
		<div class="jhda">
			
			<div class="jhda1">
				<img src="../assets/images/IMG_6251_07.png"/>
				<p class="jhp">穷游大秘书</p>
				<p class="jhp1">今日话题 | 境外旅行时，有哪些瞬间让你感觉"支付宝逆天了"！</p>
				
				<p class="jhp2">
					<img class="jhim" src="../assets/images/IMG_6251_11.png"/>
					<img class="jhim" src="../assets/images/IMG_6251_13.png"/>
				</p>
				<p class="jhp3">
					<a class="jha" href="###">穷游活动</a>
					
					<a class="jha1" href="###"><i class="iconfont icon-shoubiao"></i>刚刚</a>
					<a class="jha2" href="###"><i class="iconfont icon-xiaoxi"></i>35</a>
				
				</p>
			</div>
			<div class="jhda1">
				<img src="../assets/images/IMG_6251_07.png"/>
				<p class="jhp">穷游大秘书</p>
				<p class="jhp1">今日话题 | 境外旅行时，有哪些瞬间让你感觉"支付宝逆天了"！</p>
				
				<p class="jhp2">
					<img class="jhim" src="../assets/images/IMG_6251_11.png"/>
					<img class="jhim" src="../assets/images/IMG_6251_13.png"/>
				</p>
				<p class="jhp3">
					<a class="jha" href="###">穷游活动</a>
					<a class="jha1" href="###"><i class="iconfont icon-shoubiao"></i>刚刚</a>
					<a class="jha2" href="###"><i class="iconfont icon-xiaoxi"></i>35</a>
				
				</p>
			</div>
			<div class="jhda1">
				<img src="../assets/images/IMG_6251_07.png"/>
				<p class="jhp">穷游大秘书</p>
				<p class="jhp1">今日话题 | 境外旅行时，有哪些瞬间让你感觉"支付宝逆天了"！</p>
				
				<p class="jhp2">
					<img class="jhim" src="../assets/images/IMG_6251_11.png"/>
					<img class="jhim" src="../assets/images/IMG_6251_13.png"/>
				</p>
				<p class="jhp3">
					<a class="jha" href="###">穷游活动</a>
					<a class="jha1" href="###"><i class="iconfont icon-shoubiao"></i>刚刚</a>
					<a class="jha2" href="###"><i class="iconfont icon-xiaoxi"></i>35</a>
				
				</p>
			</div>
		
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'jhshequ',
		data(){
			return{
				str:'推荐 '
			}
		},
		mounted(){
		  	var mySwiper = new Swiper('.swiper-container', {
				slidesPerView : 3,
				spaceBetween : 20,
			})
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.jhpp{
	width: 100%;
	height: 44px;
	background: #11bf79;
	color: #fff;
	font-size: 0.28rem;
	line-height: 44px;
	text-align: center;
}
.jhbox{
	width: 100%;
	height: 1.8rem;
	background:#fff;
}
.jhbox p{
	font-size: 0.18rem;
	margin-top: -0.15rem; 
}
.jhbox li{
	float: left;
	margin-left: 0.4rem;
	list-style: none;
}
.jhbox img{
	width: 0.6rem;
	height: 0.6rem;
	margin-left: 0.1rem;
}
.jhbox1{
	width: 100%;
	height: 1.8rem;
	background: #e1e1e1;
}
.jhbox1 img{
	float: left;
	width: 2.2rem;
	height: 1.4rem;
	margin-top: 0.2rem;
	margin-left: 0.1rem;
}
.jhda{
	width: 100%;
	height:13rem;
	background: #f5f5f5;
}
.jhda1{
	width: 100%;
	height: 4rem;
	background: #fff;
	float: left;
	margin-bottom: 0.2rem;
}
.jhda1 img{
	width: 0.6rem;
	height: 0.6rem;
	margin-left: 0.1rem;
	float: left;
	margin-top: 0.2rem;
}
.jhda1 .jhp{
	font-size: 0.18rem;
	text-decoration: none;
	color: #555;
	float: left;
	margin-top: 0.2rem;
	margin-left: 0.2rem;
}
.jhda1 .jhp1{
	font-size: 0.26rem;
	text-decoration: none;
	color: #000;
	float: left;
	margin-left: 0.8rem;
	width: 5.5rem;
	height: 0.7rem;
}
.jhda1 .jhim{
	width: 1.6rem;
	height: 1.6rem;
	margin: 0.2rem 0.1rem;
}
.jhda1 .jhp2{
	margin-left: 0.7rem;
	
	float: left;
}
.jhda1 .jhp3{
	height: 0.6rem;
	width: 100%;
	float: left;
	margin-left: 0.8rem;
}
.jhp3 a{
	color: #333;
	font-size: 0.18rem;
	text-decoration: none;
}
.jhp3 .jha{
	color: #11bf79;
	float: left;
}
.jhp3 .jha1{
	margin-left: 3.2rem;
	float: left;
}.jhp3 .jha2{
	margin-left: 0.2rem;
	float: left;
}
</style>