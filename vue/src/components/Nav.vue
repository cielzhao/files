<template>
	<nav id="nav">
		<div class="container">
			<div class="row">
				<li class="nav-item" :class="{'active': item.active}" v-for="(item, key) in navData" :key="key">
					<router-link v-if="item.pageId == 0" :to="{path: '/index', query: {n:item.pageId}}">{{item.text}}</router-link>
					<router-link v-if="item.pageId != 0" :to="{path: '/coupon', query: {n:1, ca:0, st:0, q:keyWord}}">{{item.text}}</router-link>
				</li>
			</div>
		</div>
	</nav>
</template>

<script>
import axios from 'axios'
import api from '../api/api.js'

export default {
	name: 'Nav',
	data () {
		return {
			navData:
			[
	      {
	      	text: '今日新品',
	      	active: true,
	      	pageId: 0
	      },
	      {
	      	text: '领券优惠',
	      	active: false,
	      	pageId: 1
	      }
	    ],
	    keyWord: ''
		}
	},
	created() {
		this.fetchData()
	},
	mounted () {
		this.navStyle()
	},
	methods: {
		fetchData() {
			const _this = this
    	let apiUrl = api.cateApi
      axios.get(apiUrl).then(function (response) {
      	_this.keyWord = response.data[0]
      }).catch((error) => {
        console.log(error)
      })
		},
		navStyle () {
			let nQuery = this.$route.query.n
			if(nQuery) {
				var curPageId = nQuery
			} else {
				var curPageId = 0
			}

			let oNavItem = document.querySelectorAll('.nav-item')
			let length = oNavItem.length
			for(let i = 0; i < length; i++) {
				oNavItem[i].classList.remove("active")
			}
			oNavItem[curPageId].classList.add("active")
		}
	}
}
</script>

<style scoped>
#nav {
	width: 100%;
	background-color: #ff6eb4;
}
#nav .nav-item {
	display: inline-block;
}
#nav .nav-item a {
	display: inline-block;
	position: relative;
	padding: 8px 27px;
	color: #fff;
  text-align: right;
  cursor: pointer;
}
#nav .nav-item.active,
#nav .nav-item:hover {
	background-color: #bd166f;
}
#nav .nav-item.router-link-active.active {
	background-color: #ff6eb4;
}
#nav a,#nav a:link,#nav a:visited,#nav a:hover,#nav a:focus,#nav a:active {
	color: #fff;
}
#nav .nav-item a {
	display: inline-block;
}
</style>