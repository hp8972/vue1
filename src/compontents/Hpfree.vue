<template id="free">
	<div >
		<mt-header title="自由行">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<!--轮播图-->
		<mt-swipe :auto="4000" class="aa" style="height: 3rem;">
		  <mt-swipe-item class="swipe1">
		  	<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496137270&di=5a955d1db178a258ade39a08b86b0119&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qbaobei.com%2Fthumb%2FUploads%2FPicture%2F2016-04-19%2F57159e55c3b6f_258-172_0_crop.jpg"/>
		  </mt-swipe-item>
		  <mt-swipe-item class="swipe1">
		  	<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496137270&di=5a955d1db178a258ade39a08b86b0119&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qbaobei.com%2Fthumb%2FUploads%2FPicture%2F2016-04-19%2F57159e55c3b6f_258-172_0_crop.jpg"/>
		  </mt-swipe-item>
		  <mt-swipe-item class="swipe1">
		  	<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496137333&di=98d9224a9f2fe4ff08b3c60c20a07e82&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.citscq.com%2Fupfiles%2F2015%2F05%2F13%2F144811082.jpg"/>
		  </mt-swipe-item>
		</mt-swipe>
		
		<!--自由行-->
		<div id="font">
			<div class="fontclass">
				<span class="span1">
					<i class="iconfont icon-ziyouxing"></i>
				</span>
					<p class="wenzi" >自由行</p>				
			</div>
			
			<div class="fontclass">
				<span class="span2">
					<i class="iconfont icon-jipiao"></i>
				</span>
					<p class="wenzi">特价机票</p>				
			</div >
			<div class="fontclass">
				<span class="span3">
					<i class="iconfont icon-jiudian1"></i>
				</span>
					<p class="wenzi">酒店</p>				
			</div>
			<div class="fontclass">
				<span class="span4">
					<i class="iconfont icon-youlun"></i>
				</span>
					<p class="wenzi">邮轮</p>				
			</div>
		</div>
		
		<div style="height: 0.2rem;background: #ccc;"></div>
		<ul id="tab">			
			<router-link to="/Hplist" v-for="(item,index) in arr" >
				<li>{{item}}</li>
			</router-link>
		</ul>
		<div id="heng" style="width: 1rem;border: 1px solid #00BFFF;margin: 0.2rem 0.3rem;position: relative;"></div>
		<router-view></router-view>
		
	<div>
		<div class="tese">
			<div>
				<span class="span5" >特色自营</span>
				<span class="span6">专业讲解带你领略城市的魅力</span>
				<span class="span7">></span>
			</div>
		</div>
		
		<!--特色自营-->
		<div class="swiper-container lunbo">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide swipe1">
		        	<img src="http://img.80tian.com/travel/line/201507/20150717150346_0995.jpg" class="img"/>
		        	<p>[最世界线路]北非奇幻之旅-穿越摩洛哥</p>
		        	<span>￥<i>2999</i>元起</span>
		       	
		        </div>
		        <div class="swiper-slide swipe2">
		        	<img src="http://travel.southcn.com/d/special1/content/images/attachement/jpg/site4/20150213/90fba69cb3aa16479f0a17.jpg" class="img"/>
		        	<p>中土世界奇趣之旅-新西兰亲子游</p>
		        	<span>￥<i>28800</i>元起</span>
		        </div>
		        <div class="swiper-slide swipe3">
		        	<img src="http://img.80tian.com/travel/line/201309/ss13091115473086.jpg" class="img"/>
		        	<p>不可思议的印度--终生难忘之旅</p>
		        	<span>￥<i>18999</i>元起</span>
		        </div>
		         <div class="swiper-slide swipe1">
		        	<img src="http://www.diyifanwen.com/images/sililanka/0872500543483475.jpg" class="img"/>
		        	<p>斯里兰卡10天探索之旅--除了雪这里拥有一切</p>
		        	<span>￥<i>9800</i>元起</span>
		      	
		        </div>
		        <div class="swiper-slide swipe2">
		        	<img src="http://www.guolv.com/file/upload/201404/04/15-59-26-86-986.jpg" class="img"/>
		        	<p>[最世界线路] 2017小长假黄金首选清迈</p>
		        	<span>￥<i>3999</i>元起</span>
		        </div>
		        <div class="swiper-slide swipe3">
		        	<img src="http://file25.mafengwo.net/M00/8F/B0/wKgB4lKO2q-ASVIWABFzG7Avl5427.groupinfo.w600.jpeg" class="img"/>
		        	<p>[最世界线路] 至美锡兰探索之旅</p>
		        	<span>￥<i>9350</i>元起</span>
		        </div>
		    </div>
		    
		    
		</div>
		<div style="height: 0.2rem;background: #ccc;"></div>
		<div class="tese">
			<div>
				<span class="span5" >超值机票</span>
				<span class="span6">专业讲解带你领略城市的魅力</span>
				<span class="span7">></span>
			</div>
		</div>
		
		<!--特色自营-->
		<div class="swiper-container lunbo">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide ">
		        	<img src="http://img.80tian.com/travel/line/201507/20150717150346_0995.jpg" class="img"/>
		        	<p>[最世界线路]北非奇幻之旅-穿越摩洛哥</p>
		        	<span>￥<i>2999</i>元起</span>
		       	
		        </div>
		        <div class="swiper-slide ">
		        	<img src="http://travel.southcn.com/d/special1/content/images/attachement/jpg/site4/20150213/90fba69cb3aa16479f0a17.jpg" class="img"/>
		        	<p>中土世界奇趣之旅-新西兰亲子游</p>
		        	<span>￥<i>28800</i>元起</span>
		        </div>
		        <div class="swiper-slide ">
		        	<img src="http://img.80tian.com/travel/line/201309/ss13091115473086.jpg" class="img"/>
		        	<p>不可思议的印度--终生难忘之旅</p>
		        	<span>￥<i>18999</i>元起</span>
		        </div>
		         <div class="swiper-slide ">
		        	<img src="http://www.diyifanwen.com/images/sililanka/0872500543483475.jpg" class="img"/>
		        	<p>斯里兰卡10天探索之旅--除了雪这里拥有一切</p>
		        	<span>￥<i>9800</i>元起</span>
		      	
		        </div>
		        <div class="swiper-slide ">
		        	<img src="http://www.guolv.com/file/upload/201404/04/15-59-26-86-986.jpg" class="img"/>
		        	<p>[最世界线路] 2017小长假黄金首选清迈</p>
		        	<span>￥<i>3999</i>元起</span>
		        </div>
		        <div class="swiper-slide ">
		        	<img src="http://file25.mafengwo.net/M00/8F/B0/wKgB4lKO2q-ASVIWABFzG7Avl5427.groupinfo.w600.jpeg" class="img"/>
		        	<p>[最世界线路] 至美锡兰探索之旅</p>
		        	<span>￥<i>9350</i>元起</span>
		        </div>
		    </div>		    		    
		</div>
		<div style="height: 0.2rem;background: #ccc;"></div>
	</div>	
		
		
		
		
		
		<div id="mudi">
			<span>全部目的地</span>
			<span>全部自由行</span>
			<span>智能排序</span>
			<span>更多筛选</span>
		</div>
		
		<div id="city">
			<dl v-for="item in arr1">
				<dt>
					<img :src="item.img" class="pic"/>
				</dt>
				<dd>
					<p class="intro">
						{{item.intro}}
					</p>
					<p class="city">
						{{item.city}}
					</p>
					<div class="price">
						<span>{{item.yishou}}</span>
						<span class="price1">
							<b>{{item.price}}</b>元起
							
						</span>
					</div>
					
				</dd>
			</dl>
		</div>
	</div>
	
</template>

<script>
	
	export default{
		name:"free",
		 
		data(){
			return{
				arr:["推荐","亚洲","欧美","其他"],
				arr1:[]
			}
		},		
		mounted(){	
			var _this=this;
			 var mySwiper = new Swiper('.swiper-container', {
					slidesPerView: 2.5,
					direction: 'horizontal',
					spaceBetween:10,
					pagination: '.swiper-pagination',
					freeMode : true,
					freeModeFluid : false
				})
			 
			$("#tab a").on("tap",function(){
				 console.log($(this).index())
				$(this).css({
					color:"#00BFFF"
				})
				console.log(this)
				console.log($(this).siblings())
				$(this).siblings().css({
					color:"#222222"
				})
			console.log($(this).width())
//				console.log($(this).index())
				$("#heng")[0].style.left=1.6*$(this).index()+"rem";
				$("#heng")[0].style.transition="1s";
			})
			
			
			axios.get('/src/json/Hpfree.json').then(function (res) {
//				    console.log(res.data[0]);				    
//				     console.log(_this);
				     _this.arr1=res.data[0];
//				     console.log( _this.arr1);
				    
				  })
			
				axios({
				  method:'get',
				  url:'  http://datainfo.duapp.com/shopdata/getclass.php',
				 
				  responseType:'stream'
				})
				  .then(function(response) {
				  	console.log(response)
				  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
				});
			
		}
	}
	
</script>

<style>
	
	*{
		margin: 0;padding: 0;
	}
	
	.aa{
		height: 3rem;width: 100%;
	}
	.swipe1{
		height: 3rem;width: 100%;
	}
	.swipe1 img{
		height: 100%;width: 100%;
	}
	#font{
		display: flex;flex-direction: row;background: #fff;padding-bottom: 0.2rem;
	}
	.fontclass{
		flex: 1;text-align: center;
	}
	.fontclass .span1{
		display: inline-block;height: 0.7rem;width: 0.7rem;border-radius: 50%;
		background: red;margin-bottom: 0.3rem;line-height: 0.4rem;
	}
	.fontclass .span2{
		display: inline-block;height: 0.7rem;width: 0.7rem;border-radius: 50%;
		background: #0086B3;margin-bottom: 0.3rem;line-height: 0.4rem;
	}
	.fontclass .span3{
		display: inline-block;height: 0.7rem;width: 0.7rem;border-radius: 50%;
		background: #DF5000;margin-bottom: 0.3rem;line-height: 0.4rem;
	}
	.fontclass .span4{
		display: inline-block;height: 0.7rem;width: 0.7rem;border-radius: 50%;
		background:deepskyblue;margin-bottom: 0.3rem;line-height: 0.4rem;
	}
	 #font .iconfont{
	 	font-size: 0.4rem;color: #FFFFFF;
	 }
	  #font .wenzi{
	 	font-size: 0.3rem;
	 }
	 #tab {
	 	font-size: 0.3rem;display: flex;flex-direction: row;
	 	background: #FFFFFF;margin-top: 0.2rem;
	 }
	 #tab a{
	 	flex: 1;text-align: center;list-style: none;text-decoration: none;color: #000000;
	 }
	 
	 /*特色自营*/
	 .tese{
	 	padding: 0 0.2rem;
	 }
	 .tese .span5{
	 	font-size: 0.4rem; font-weight:600;
	 }
	  .tese .span6{
	 	font-size: 0.2rem; color: #ccc;
	 }
	  .tese .span7{
	 	font-size: 0.4rem; color: #bbb;
	 }
	 
	 .lunbo{
	 	width: 95vw;margin: 0 auto;height: 3rem;
	 }
	 
	
	 .lunbo .swiper-slide{
		 display: flex;
		 flex-direction: column;
	 	height: 100%;
	 }
	 .lunbo .img{
	 	height: 50%;width: 100%;
	 }
	 .lunbo .swiper-slide p{
	 	font-size: 0.2rem;color: #333;
	 }
	 .lunbo .swiper-slide span{
	 	font-size: 0.2rem;color: #ccc;margin-top: 0.640rem;
	 }
	 .lunbo .swiper-slide span i{
	 	color: red;font-style: normal;font-weight: 400;font-size: 0.24rem;
	 }
	 
	 
	 /*全部目的地*/
	 #mudi{
	 	display: flex;flex-direction: row;height: 0.6rem;border-bottom: 1px solid #ddd;
	 }
	 #mudi span{
	 	flex: 1;font-size: 0.24rem;text-align: center;line-height: 0.6rem;
	 }
	 
	 #city dl{
	 	font-size: 0.24rem;padding: 0.2rem;height: auto;
	 	overflow: hidden;border-bottom: 1px solid #ddd;
	 }
	  #city dl dt{
	 	height: 1.3rem;width: 1.7rem;float: left;
	 }
	 #city dl dt img{
	 	height: 100%;width: 100%;
	 }
	 #city dl dd{
	 	float: left;margin-left: 0.2rem;width: 4.1rem;line-height: 0.4rem;
	 }
	  #city dl dd .price1{
	 	float: right;
	 }
	 #city dl dd .price1 b{
	 	font-weight: 600;font-size: 0.28rem;color: red;
	 }
</style>