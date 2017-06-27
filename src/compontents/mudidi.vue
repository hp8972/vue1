<template>
	
	<div id="mudi">
		<div class="muleft" style="margin-top: 40px">

			<ul>
				<li v-for="(item,i) in arr" :id="item.id" @click="fn(item.id)">
						{{item["name"]}}
				</li>
			</ul>

		</div>

		
		<div class="muright">

			<div>
				<h1>{{arr["0"]["name"]}}</h1>
				<router-link to="/Header">
				<ul>
					<li v-for="(con,j) in arr1">
					<!--	{{console.log(con)}}-->
						<img :src='con["img"]' alt="" />
					</li>
				</ul>
				</router-link>
			</div>
			<div id="hot">
				<h1>热门推荐</h1>
				<ul >
					<li>
						<div>
							<img src="src/img/xiang.png" alt="" />
						</div>
						<div class="htu">
							<p class="guo">法国</p>
							<p class="guo1">France</p>
						</div>
					</li>
					<li>
						<div>
							<img src="src/img/xiang.png" alt="" />
						</div>
						<div class="htu">
							<p class="guo">法国</p>
							<p class="guo1">France</p>
						</div>
					</li>
					<li>
						<div>
							<img src="src/img/xiang.png" alt="" />
						</div>
						<div class="htu">
							<p class="guo">法国</p>
							<p class="guo1">France</p>
						</div>
					</li>
					<li>
						<div>
							<img src="src/img/xiang.png" alt="" />
						</div>
						<div class="htu">
							<p class="guo">法国</p>
							<p class="guo1">France</p>
						</div>
					</li>
				</ul>
				
				
			</div>
		</div>
		
		
		
	</div>
	
</template>

<script>
	
//	import axios from "axios"
	
	
	export default{
		name:"mudi",
		data:function(){
			return{
				arr:"",
				arr1:"",
				id:"0",
				str:"目的地"

			}
		},
		methods:{
			
			fn:function(u){
				this.id=u;
				var _this=this
				axios.get("src/json/mudi.json").then(function(res){
			  		
			  		_this.arr1=res.data[u]["data"]
			  		_this.arr2=res.data[u]["tuijian"]
			  	})
				
			}
		},
		mounted:function(){
			var _this=this
		    axios.get("src/json/mudi.json").then(function(res){
		  		_this.arr=res.data
		  		_this.arr1=res.data[_this.id]["data"]
		  		_this.arr2=res.data[_this.id]["tuijian"]
		  	})
	  }
		
			
		
	}
</script>

<style>
	
	
	ul{overflow: hidden;}
	.muleft{
		width:25%;
		float:left;
		font-size: 0.25rem;
		background: #f1f1f1;
		line-height: 0.9rem;
	}
	.muleft li{
		list-style: none;
		border-bottom: 1px solid #999;
		height: 0.9rem;
		text-align: center;
	}
	.muleft a{
		color:#000;
		text-decoration: none;
	}
	.muright{
		width:75%;
		float: right;
	}
	.muright li{
		list-style: none;float: left;
		width:45%;margin-left: 3%;overflow: hidden;height: 1.6rem;margin-bottom: 0.2rem;
	}
	.muright img{
		width:100%;height:100%
	}
	.muright h1{
	    font-size: 0.26rem;
	    text-indent: 3%;
	    margin: 0.1rem 0;
	}
	#hot img{
		width:43%;
		float: left;
	}
	
	#hot .guo{
		font-size: 0.18rem;margin: 0.05rem 0 0.08rem ;font-weight: 600;
	}
	#hot .guo1{
		font-size: 0.14rem;
	}
	.htu{
		text-indent: 0.16rem;
	}
	#hot li{
		margin-top:0.06rem;height: 0.7rem;margin-bottom: 0;
	}
	#hot h1{
		font-size: 0.18rem;margin: 0.05rem 0;
	}
</style>