<template>
	<nav id="nav">
		<div class="container">
			<li class="nav-item active"><a href="javascript:;">今日上新</a></li>
			<li class="nav-item"><a href="javascript:;">领券优惠直播</a></li>
			<li class="nav-item"><a href="javascript:;">咚咚抢</a></li>
			<li class="nav-item"><a href="javascript:;">超级人气榜</a></li>
			<li class="nav-item"><a href="javascript:;">9块9包邮</a></li>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Nav'
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
}
#nav .nav-item.active,
#nav .nav-item:hover {
	background-color: #bd166f;
}
#nav a,#nav a:link,#nav a:visited,#nav a:hover,#nav a:focus,#nav a:active {
	color: #fff;
}
#nav .nav-item a {
	display: inline-block;
}
</style>