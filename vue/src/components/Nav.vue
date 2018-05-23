<template>
	<nav id="nav">
		<div class="container">
			<!--<li class="nav-item" :class="{'active': item.active}" v-for="(item, key) in navData" :key="item.pageId" @click="sendMsg(key, $event)">{{item.text}}</li>-->
			<li class="nav-item" :class="{'active': item.active}" v-for="(item, key) in navData" :key="key">
				<router-link v-if="item.pageId == 0" :to="{name: 'index', params: {n:item.pageId}}">{{item.text}}</router-link>
				<router-link v-if="item.pageId != 0" :to="{name: 'coupon', params: {c:'fz', n:1}}">{{item.text}}</router-link>
			</li>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Nav',
	data () {
		return {
			navData:
			[
	      {
	      	text: '今日上新',
	      	active: true,
	      	pageId: 0
	      },
	      {
	      	text: '领券优惠',
	      	active: false,
	      	pageId: 1
	      }
	    ]
		}
	},
	mounted () {
		this.navStyle()
	},
	methods: {
		navStyle: function() {
			console.log(this.$route.params.n)
			if(this.$route.params.n != undefined) {
				var curPageId = this.$route.params.n
			} else {
				var curPageId = 0
			}

			let oNavItem = document.querySelectorAll('.nav-item')
			let length = oNavItem.length
			for(let i = 0; i < length; i++) {
				oNavItem[i].classList.remove("active")
			}
			oNavItem[curPageId].classList.add("active")
				console.log( this.$route.params.n)
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