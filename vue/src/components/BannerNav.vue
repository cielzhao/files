<template>
	<div class="banner-left">
		<ul class="banner-nav">
			<li v-for="(item, key) in bannerNavData" :key="key">
				<router-link :to="{name: 'coupon', params: {n:1, c:item.paramItem}}">{{item.text}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
	name: 'BannerNav',
	data () {
		return {
			bannerNavData: [
				{
	      	text: '服装',
	      	paramItem: 'fz'
	      },
	      {
	      	text: '母婴',
	      	paramItem: 'my'
	      },
	      {
	      	text: '化妆',
	      	paramItem: 'hz'
	      },
	      {
	      	text: '居家日用',
	      	paramItem: 'jjry'
	      },
	      {
	      	text: '鞋包配饰',
	      	paramItem: 'xbps'
	      },
	      {
	      	text: '美食',
	      	paramItem: 'ms'
	      },
	      {
	      	text: '文体车品',
	      	paramItem: 'wtcp'
	      },
	      {
	      	text: '数码家电',
	      	paramItem: 'smjd'
	      }
			]
		}
	},
	methods: {
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
#banner .banner-nav li > a {
	display: inline-block;
	width: 100%;
    height: 37px;
    line-height: 37px;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
}
#banner .banner-nav li:hover {
	background-color:#efdfe4;
}
#banner a,#banner a:link,#banner a:visited,#banner a:hover,#banner a:focus,#banner a:active {
	color: #333;
}
</style>