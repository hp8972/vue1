<template >
	<div id="shop">
		
		<input type="text" placeholder="搜索折扣" />
	
		
		<mt-swipe :auto="4000" id="pp">
		  <mt-swipe-item><img class="img1" src="https://pic.qyer.com/public/lmapp/op_conf/2017/05/03/14938030882788?imageMogr2/thumbnail/!750x375r" width="100%" alt=""></mt-swipe-item>
		  <mt-swipe-item><img class="img1" src="https://pic.qyer.com/public/lmapp/op_conf/2017/04/27/14932880066911?imageMogr2/thumbnail/!750x375r" width="100%" alt=""></mt-swipe-item>
		  <mt-swipe-item><img class="img1" src="https://pic.qyer.com/public/lmapp/op_conf/2017/04/27/14932880066911?imageMogr2/thumbnail/!750x375r" width="100%" alt=""></mt-swipe-item>
		</mt-swipe>

		<mt-tabbar id="bar">
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/09/14890319834715" width="44" height="44">
		    
		    自由行
		  </mt-tab-item>
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888571565144" width="44" height="44">
		    
		    全部
		  </mt-tab-item>
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/09/14890319834715" width="44" height="44">
		    
		    特价机票
		  </mt-tab-item>
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888575672497" width="44" height="44">
		    
		    自驾租车
		  </mt-tab-item>
		   <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888571565144" width="44" height="44">
		    
		    酒店
		  </mt-tab-item>
		</mt-tabbar>
		
		<mt-tabbar id="bar1">
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888577761167" width="44" height="44">
		    
		    签证
		  </mt-tab-item>
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888735248675" width="44" height="44">
		    
		    邮轮
		  </mt-tab-item>
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/04/27/14932796748953" width="44" height="44">
		   		
		    wifi电话卡
		  </mt-tab-item>
		  <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888735248675" width="44" height="44">
		    特色自营
		  </mt-tab-item>
		   <mt-tab-item id="">
		    <img slot="icon" src="https://pic.qyer.com/public/mzworld/barconf/2017/03/07/14888577761167" width="44" height="44">
		    
		    接送机包车
		  </mt-tab-item>
		</mt-tabbar>

		
		<div class="sec">
			<div class="fun">
			<p style="display:inline-block;">当地玩乐</p> <span>更多</span>
			</div>
			<div class="row">
			  <div class="col-xs-4 ">
			  <img src="http://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888725998572" width="17" height="17">
			  日游小团
			  </div>
			  <div class="col-xs-4 ">
			<img src="http://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888725998572" width="17" height="17">					  
				深度体验
			  </div>
			  
			  <div class="col-xs-4 ">
			  	<img src="http://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888725998572" width="17" height="17">					 
			  交通票卷
			  </div>
			</div>
	
			<div class="row">
			  <div class="col-xs-4 ">
			  	<img src="http://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888725998572" width="17" height="17">					 
			  门票票券
			  </div>
			  <div class="col-xs-4" >
			  	<img src="http://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888725998572" width="17" height="17">					 
			  餐饮美食
			  </div>
			  
			  <div class="col-xs-4 ">
			  	<img src="http://pic.qyer.com/public/mzworld/m_pages/2017/03/07/14888725998572" width="17" height="17">					 
			  境外保险
			  </div>
			</div>
		</div>
		
		
		
		
		<div class="count">
			<div class="wenzi1">精选折扣，每日更新</div>
			<!--<div class="neirong">
				<div class="nei1">
					<img src="" />
					<h1>拒签全退,含暑假]北京/天津/上海直飞日本</h1>	
					<p>1499起</p>
				</div>
			</div>
			
			<div class="neirong">
				<div class="nei1">
					<img src="http://pic.qyer.com/lastminute/library/2014/12/26/1419561733/300x200" />
					<h1>拒签全退,含暑假]北京/天津/上海直飞日本</h1>	
					<p>1499起</p>
				</div>
			</div>-->
			
			<div class="neirong" v-for="item in a">
				<div class="nei1">
					<img :src="item.src" />
					<h1 class="titl">{{item.title}}</h1>	
					<p class="pric">{{item.price}}</p>
				</div>
			</div>
				
		</div>
		
		
			 <div class="wenzi">猜你喜欢</div>
			 
			<div class="swiper-container" style="width: 100vw;height: 200px;" >
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<div class="neirong">
							<div class="nei1">
								<img src="http://pic.qyer.com/lastminute/library/2016/10/18/58058d343c195.jpg/300x200" />
								<h1>拒签全退,含暑假]北京/天津/上海直飞日本</h1>	
								<p>1499起</p>
							</div>
						</div>
			        </div>
			        <div class="swiper-slide">
			        	<div class="neirong">
							<div class="nei1">
								<img src="http://pic.qyer.com/lastminute/library/2016/10/18/58058d343c195.jpg/300x200" />
								<h1>拒签全退,含暑假]北京/天津/上海直飞日本</h1>	
								<p>1499起</p>
							</div>
						</div>
			        </div>
			        <div class="swiper-slide">
			        	<div class="neirong">
							<div class="nei1">
								<img src="http://pic.qyer.com/lastminute/library/2016/10/18/58058d343c195.jpg/300x200" />
								<h1>拒签全退,含暑假]北京/天津/上海直飞日本</h1>	
								<p>1499起</p>
							</div>
						</div>
			        </div>
			    </div>
		   </div>
		  
		
	</div>
</template>

<script> 
//	import { Swipe, SwipeItem } from 'mint-ui';
//	import axios from "axios"
	
	export default{
		
		name:"shop",
		data(){
			return{
				a:[]
			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    slidesPerView : 2.5,
			    spaceBetween : 20
		 });
			 var _this=this
			 axios.get('test.json')
			    .then(function(res){
			        console.log(res.data);
			        _this.a=res.data;			        
			    })
			    .catch(function(err){			        
			    })
		}
	}
	
	       
</script>

<style>
	.count{width:100vw;overflow: hidden;}
	.wenzi1{text-align:center;font-size:16px;height:30px;line-height: 35px;margin-top:20px;font-weight:800}
	.neirong{width:50vw;overflow: hidden;float: left;}
	.nei1{width:48vw;overflow: hidden;padding: 0 5vw;height: 180px;}
	.nei1 img{width:100%;}
	.nei1 h1{font-size:12px;}
	.wenzi{text-align:center;font-size:16px;height:30px;line-height: 35px;font-weight: 800;}
	
	#shop{
		width: 100vw;text-align: center;/*height: 100vh;*/
	}
	input{width:90%;height:30px;border: 2px solid #999;}
	.ha{width:100%;height:40px;background: #f00;}
	.img1{height:250px;}
	#pp{
		/*overflow: hidden;*/	
		margin-top:10px;
		height:250px;
		
	}
	.mint-swipe-indicator{
		opacity:1!important;
	}
	#bar{
		top:350px;z-index: -1000;
	}
	#bar1{top:410px;z-index: -1000;}
	.mint-tab-item-label{color:#000}
	.sec{margin-top:120px}
	.fun span{float:right;color:green}
	.pric{color:#D43F3A}
	.titl{height:26px;}
	.col-xs-4{border:1px solid #ccc;height:40px;line-height: 40px;}
</style>