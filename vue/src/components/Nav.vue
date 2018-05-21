<template>
	<nav id="nav">
		<div class="container">
			<li class="nav-item" :class="{'active': item.active}" v-for="(item, key) in navData" :key="item.pageId" @click="sendMsg(key, $event)">{{item.text}}</li>
		</div>
	</nav>
</template>

<script>
import bus from '../assets/eventBus'
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
	      	text: '领券优惠直播',
	      	active: false,
	      	pageId: 1
	      }
	    ]
		}
	},
	created() {
//		this.navStyle()
	},
	methods: {
		sendMsg: function(key) {
			let oNavItem = document.querySelectorAll('.nav-item')
			let length = oNavItem.length
			for(let i = 0; i < length; i++) {
				oNavItem[i].classList.remove("active")
			}
			oNavItem[key].classList.add("active")

			bus.$emit('getTarget', key)
			this.$router.push({ path: '/', query: { index: key}})
		},
		navStyle: function() {
			let curPageId = window.location.href.split('?')[1].split('=')[1]
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
	position: relative;
	padding: 8px 27px;
	color: #fff;
  text-align: right;
  cursor: pointer;
}
#nav .nav-item.active,
#nav .nav-item:hover,
#nav .router-link-exact-active,
#nav .nav-item.router-link-exact-active.router-link-active.active {
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