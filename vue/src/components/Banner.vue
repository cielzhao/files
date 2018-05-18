<template>
	<div id="banner">
		<div class="container">
			<div class="banner-left">
				<ul class="banner-nav">
					<li><a href="javascript:;">服装</a></li>
					<li><a href="javascript:;">母婴</a></li>
					<li><a href="javascript:;">化妆</a></li>
					<li><a href="javascript:;">居家日</a></li>
					<li><a href="javascript:;">鞋包配饰</a></li>
					<li><a href="javascript:;">美食</a></li>
					<li><a href="javascript:;">文体车品</a></li>
					<li><a href="javascript:;">数码家电</a></li>
				</ul>
			</div>

			<BannerSwiper></BannerSwiper>
			<BannerShare></BannerShare>
		</div>
	</div>
</template>

<script>
import BannerSwiper from './BannerSwiper'
import BannerShare from './BannerShare'

export default {
	name: 'Banner',
	components: {
    'BannerSwiper': BannerSwiper,
    'BannerShare': BannerShare,
  }
}
</script>

<style>
#banner .container > div {
	float: left;
	height: 300px;
}
#banner .banner-left {
	width: 180px;
	background-color: #fbeaf4;
}
#banner .banner-nav {
	margin: 0;
	padding: 0;
}
#banner .banner-nav li {
	width: 100%;
    height: 37px;
    line-height: 37px;
    padding-left: 45px;
    font-size: 14px;
    box-sizing: border-box;
}
#banner .banner-nav li:hover {
	background-color:#efdfe4;
}
#banner a,#banner a:link,#banner a:visited,#banner a:hover,#banner a:focus,#banner a:active {
	color: #333;
}
</style>