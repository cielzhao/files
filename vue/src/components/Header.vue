<template>
	<header id="header">
		<div class="header-top">
			<div class="container">
				<div class="header-top-left fl">每天千款优惠券、只为专注精选！</div>
				<ul class="header-top-right fr">
					<li><a class="set-home" href="javascript:;" title="将本站设为首页">设为首页</a></li>
					<li><a class="add-favorite" href="javascript:;" title="加入收藏，方便下次打开">加入收藏</a></li>
					<li><a class="my-service" href="javascript:;" title="联系我帮你解答">遇到购物问题? 联系我 ></a></li>
				</ul>
			</div>
		</div>
		<div class="header-con">
			<div class="container">
				<div class="header-con-logo fl">
					<a href="javascript:;">精品女装</a>
				</div>
				<div class="header-con-search fr">
					<div id="search">
						<form>
							<input class="search-input" type="text" placeholder="精品女装" />
							<input class="search-btn" type="button" value="搜索" />
						</form>
					</div>
					<ul class="header-con-info fr">
						<dl><dt></dt></dl>
						<dl><dt></dt></dl>
						<dl><dt></dt></dl>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style scoped>
.header-top-left {
	margin: 4px 0;
	font-size: 12px;
	color: #666;
	letter-spacing: 1px;
}
.header-top-right li {
	display: inline-block;
	margin: 4px 8px;
	font-size: 12px;
	letter-spacing: 1px;
}
.header-top-right a {
	color: #666;
}
.header-top-right a.my-service {
	color: #8da7cb;
}
.header-con-logo {
	width: 380px;
  height: 80px;
}
.header-con-logo a {
    line-height: 80px;
    font-size: 36px;
    padding-left: 20px;
    color: #ff6eb4;
}
.header-con-search {
	float: right;
    width: 790px;
}

#search {
	float: left;
	position: relative;
  margin-top: 21px;
}
#search .search-input {
	height: 33px;
    width: 295px;
    float: left;
    padding: 0 20px;
    border: 2px solid #ff6eb4;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    outline: 0;
}
#search .search-btn {
	display: inline-block;
    background-color: #ff6eb4;
    color: #fff;
    letter-spacing: 2px;
    border: 0;
    line-height: 21px;
    cursor: pointer;
    font-size: 16px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 37px;
    overflow: hidden;
    padding: 7px 23px;
    outline: 0;
}
.header-con-info dl {
	float: left;
	margin: 5px 16px;
}
.header-con-info dl:nth-child(1) dt {
	width: 60px;
    height: 70px;
    background-image: url(../assets/images/index/baozhang.png);
    background-position: 0 1px;
}
.header-con-info dl:nth-child(2) dt {
	width: 60px;
    height: 70px;
    background-image: url(../assets/images/index/baozhang.png);
    background-position: 0 -77px;
}
.header-con-info dl:nth-child(3) dt {
	width: 60px;
    height: 70px;
    background-image: url(../assets/images/index/baozhang.png);
    background-position: 0 -151px;
}
</style>