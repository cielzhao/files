<template>
	<nav id="nav">
		<div class="container">
			<li></li>
			<router-link class="nav-item" :class="{'active': item.active}" v-for="(item, key) in navData" :key="item.pageId" @click="sendMsg(key)" :to="{ name: 'Index', query: { pageId: item.pageId }}" tag="li">{{item.text}}</router-link>
			<!--<li class="nav-item" :class="{'active': item.active}" v-for="(item, key) in navData" :key="item.pageId" @click="sendMsg(key)">{{item.text}}</li>-->
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
	methods: {
		sendMsg: function(key) {
//			console.log(key)
//			bus.$emit('pageId', key)
			bus.$emit('getTarget', key);
//			this.$router.push({ name: 'Index', params: { pageId: key}})
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