<template>
	<div class="banner-left col-md-2 col-sm-12">
		<ul class="banner-nav">
			<li v-for="(item, key) in bannerNavData" :key="key" @click="navStyle(key)">
				<router-link :to="{path: '/coupon', query: {n:1, t:key, st:0, sk:0}}">{{item}}</router-link>
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
		},
		navStyle (key) {
			window.localStorage.setItem('tParam', key)
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
#banner .banner-nav.col-md-2 {
	padding-left: 0;
	padding-right: 0;
}
#banner .banner-nav li:hover {
	background-color:#efdfe4;
}
#banner a,#banner a:link,#banner a:visited,#banner a:hover,#banner a:focus,#banner a:active {
	color: #333;
}
@media only screen and (max-width: 575px) {
	#banner .banner-left {
    display: none;
	}
}


</style>