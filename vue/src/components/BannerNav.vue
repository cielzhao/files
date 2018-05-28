<template>
	<div class="banner-left col-md-2 col-sm-12">
		<ul class="banner-nav">
			<li v-for="(item, key) in bannerNavData" :key="key">
				<router-link :to="{path: '/coupon', query: {n:1, ca:key, sk:0}}">{{item}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import api from '../api/api.js'

export default {
	name: 'BannerNav',
	data () {
		return {
			bannerNavData: null
		}
	},
	created() {
		this.fetchData()
	},
	methods: {
		fetchData() {
			const _this = this
    	let apiUrl = api.cateApi
      axios.get(apiUrl).then(function (response) {
      	_this.bannerNavData = response.data
      }).catch((error) => {
        console.log(error)
      })
		}
	}
}
</script>

<style>
#banner .banner-left {
	height: 300px;
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