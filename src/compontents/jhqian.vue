<template>
	<div id="jhqian">
		<div class="hjhea" style="margin-top: 40px">
			<i class="iconfont icon-fanhui jhi"></i>
			<input class="txt" type="text" placeholder="搜索本版内容"/>
			<i class="iconfont icon-xinjianyemiantianjia jhi1"></i>
		</div>
		
		<div class="hjbox">
			<div class="hjhea1">
			<img src="../assets/images/IMG_6251_11.png"/>
			<div class="hjhe">
				<p class="hjpp">签证</p>
				<p>出境旅行的第一步 | 72435个帖子</p>
			</div>
		</div>
		<div class="hjbox2">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><a href="###">全部</a></div>
			        <div class="swiper-slide"><a href="###">精华</a></div>
			        <div class="swiper-slide"><a href="###">攻略</a></div>
			        <div class="swiper-slide"><a href="###">讨论</a></div>
			        <div class="swiper-slide"><a href="###">问答</a></div>
			    </div>
			</div>
		</div>
			<div class="hjbox1">
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
			<div class="hjbox1">
				<img src="../assets/images/IMG_6251_07.png"/>
				<p class="jhp">穷游大秘书</p>
				<p class="jhp1">今日话题 | 境外旅行时，有哪些瞬间让你感觉"支付宝逆天了"！</p>
				 
				<p class="jhp3">
					<a class="jha" href="###">穷游活动</a>
					<a class="jha1" href="###"><i class="iconfont icon-shoubiao"></i>刚刚</a>
					<a class="jha2" href="###"><i class="iconfont icon-xiaoxi"></i>35</a>
				
				</p>
			</div>
			<div class="hjbox1">
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
		name:'jhqian',
		data(){
			return{
				
			}
		},
		mounted(){
		  	var mySwiper = new Swiper('.swiper-container', {
				slidesPerView : 6,
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
	.hjbox2{
		width: 100%;
		height: 0.7rem;
		border-bottom: 1px solid #E1E1E1;
		border-top: 1px solid #E1E1E1;
		background: #fff;
	}
	.hjbox2 a{
		
		height: 0.7rem;
		line-height: 0.7rem;
		font-size: 0.16rem;
		color: #333;
		text-decoration: none;
		display: block;
		float: left;
	}
	.hjhea{
		width: 100%;
		height: 44px;
		background: #11bf79;
		position: relative;
	}
	.hjhea1{
		width: 100%;
		height: 1.2rem;
		background: #fff;
		margin-bottom: 0.2rem;
	}
	.hjhea1 img{
		width: 0.8rem;
		height: 0.8rem;
		float: left;
		margin: 0.2rem;
	}
	.txt{
		position: absolute;
		top: 0.05rem;
		left: 1.2rem;
		width: 4rem;
		height: 0.36rem;
		border: none;
		border-radius: 10rem;
		outline: none;
	}
	.hjhe{
		float: left;
		margin-top: 0.2rem;
	}
	.hjhe p{
		font-size: 0.18rem;
		line-height: 0.5rem;
	}
	.hjhe .hjpp{
		font-size: 0.34rem;
	}
	.hjbox{
		width: 100%;
		height:13rem;
		background: #f5f5f5;
	}
	.hjbox1{
		width: 100%;
		height:auto;
		background: #fff;
		float: left;
		margin-bottom: 0.2rem;
	}
	.hjbox1 img{
		width: 0.6rem;
		height: 0.6rem;
		margin-left: 0.1rem;
		float: left;
		margin-top: 0.2rem;
	}
	.hjbox1 .jhp{
		font-size: 0.18rem;
		text-decoration: none;
		color: #555;
		float: left;
		margin-top: 0.2rem;
		margin-left: 0.2rem;
	}
	.hjbox1 .jhp1{
		font-size: 0.26rem;
		text-decoration: none;
		color: #000;
		float: left;
		margin-left: 0.8rem;
		width: 5.5rem;
		height: 0.7rem;
	}
	.hjbox1 .jhim{
		width: 1.6rem;
		height: 1.6rem;
		margin: 0.2rem 0.1rem;
	}
	.hjbox1 .jhp2{
		margin-left: 0.7rem;
		
		float: left;
	}
	.hjbox1 .jhp3{
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
	.jhi{
		color: #fff;
		position: absolute;
		left: 0.1rem;
		top: 0.26rem;
	}
	.jhi1{
		color: #fff;
		position: absolute;
		right: 0.3rem;
		top: 0.26rem;
	}
</style>