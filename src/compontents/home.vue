<template id="home">
	<div class='banner'>
		<mt-swipe :auto="4000" style='width:100vw;height:200px;margin-top:40px;'>
			<mt-swipe-item>
				<img src="../assets/14938030882788.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/14932880066911.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../assets/14951876135251.jpg" />
			</mt-swipe-item>
		</mt-swipe>

		<div class="flow">
			<h3 style='line-height:30px;padding-left:10px;'>办理流程</h3>
			<div style='display:flex;justify-content:space-around;line-height:50px;'>
				<span>1预定下单</span>
				<span>2提交材料</span>
				<span>3商家预审</span>
				<span>4使馆送签</span>
				<span>5出签派送</span>
			</div>
		</div>

		<div class="cuntry">
			<div>
				<h3 style='line-height:30px;padding-left:10px;display:inline;'>热门国家和地区</h3>
				<a href='###' style='float:right;line-height:30px;color:forestgreen;'>全部></a>
			</div>
			<div>
				<img src="../assets/640x360 (1).jpg" />
				<img src="../assets/640x360 (2).jpg" />
				<img src="../assets/640x360 (3).jpg" />
				<img src="../assets/640x360 (4).jpg" />
				<img src="../assets/640x360 (5).jpg" />
				<img src="../assets/640x360 (6).jpg" />
				<img src="../assets/640x360 (7).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (9).jpg" />
				<img src="../assets/640x360 (10).jpg" />
				<img src="../assets/640x360 (12).jpg" />
				<img src="../assets/640x360 (14).jpg" />
				<img src="../assets/640x360 (15).jpg" />
				<img src="../assets/640x360 (16).jpg" />
				<img src="../assets/640x360 (16).jpg" />
				<img src="../assets/640x360 (2).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (8).jpg" />
				<img src="../assets/640x360 (10).jpg" />
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style>
	a {
		text-decoration: none;
	}
	
	.banner {
		background: #e5e5e5;
		width: 100%;
		font-size: 14px;
		padding-bottom: 40px;
		overflow: auto;
	}
	
	.banner img {
		height: 200px;
	}
	
	.flow {
		margin-top: 10px;
		background: #fff;
	}
	
	.cuntry {
		margin-top: 10px;
		background: #fff;
	}
	
	.cuntry img {
		height: 70px;
		border: none;
		float: left;
	}
</style>