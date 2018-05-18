<template>
	<div class="live">
		<div class="hot-head">
			<div class="hot-head-left fl">
        <h1>领券优惠直播<span class="tatal">67772</span></h1>
      </div>
      <div class="hot-head-right fr">
        <span style="color: #505050;">更多优惠 »</span>
      </div>
		</div>
		<div class="goods-list">
			<ul class="clearfix">
				<li class="theme-hover-border-color-1 ">
          <a href="javascript:;" class="img" target="_blank">
            <i class="today-new"></i>
            <img src="https://img.alicdn.com/imgextra/i3/190903296/TB2pS_hXhUaBuNjt_fPXXXOoFXa_!!190903296.jpg_310x310.jpg" alt="">
          </a>
          <div class="goods-padding">
            <div class="coupon-wrap clearfix">
              <span class="price theme-color-8"><b><i>￥</i>24.9</b>券后价</span>
              <span class="coupon theme-bg-color-9 theme-color-1 theme-border-color-1">券<b><i>￥</i>25</b></span>
            </div>
            <div class="title">
              <a href="javascript:;">五芳斋 端午喜乐鲜肉蛋黄豆沙粽10只装</a>
            </div>
            <div class="goods-num-type">
              <span class="goods-num">销量<b>121378</b></span>
              <div class="goods-type">
              	<i class="tmall" title="天猫"></i><i class="trans" title="运费险"></i><i class="you" title="优品"></i><i class="miaosha" title="秒杀"></i>                                </div>
          		</div>
          </div>
        </li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CouponLive'
}
</script>

<style>
.live {
	margin-top: 20px;
}
.goods-list ul {
	padding: 0;
}
.goods-list ul li {
    float: left;
    margin: 0 18px 20px 0;
    padding: 0;
    border: 1px solid #eee;
    height: 400px;
    width: 284px;
    background: #fff;
    display: block;
    overflow: hidden;
}
.goods-list ul li:hover {
	border: 1px solid #ff3e80;
    box-shadow: 0 0 10px 0 rgba(170,170,170,.63);
}
.goods-list ul li a.img {
    position: relative;
    display: block;
    width: 284px;
    height: 284px;
    margin: 0;
    padding: 0;
}
.goods-list ul li .goods-padding {
    padding: 18px 12px;
}
.goods-list ul li .goods-padding .coupon-wrap {
    position: relative;
    height: 26px;
    display: block;
    width: 100%;
    margin-bottom: 12px;
}
.goods-list ul li .goods-padding .coupon-wrap {
    position: relative;
    height: 26px;
    display: block;
    width: 100%;
    margin-bottom: 12px;
}
.goods-list ul li .goods-padding .coupon-wrap .price {
    height: 26px;
    line-height: 18px;
    color: #ff0060;
    float: left;
    overflow: hidden;
}
.goods-list ul li .goods-padding .coupon-wrap .price b {
    font-size: 30px;
    padding-right: 2px;
    line-height: 28px;
}
.goods-list ul li .goods-padding .coupon-wrap .coupon {
    position: absolute;
    right: 0;
    font: 12px Simsun;
    text-align: center;
    background: #fff7fa;
    color: #ff0060;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    margin: 0;
    border: 1px dotted #ff0060;
}
.goods-list ul li .goods-padding .title {
    height: 14px;
    overflow: hidden;
    display: block;
    line-height: 14px;
    letter-spacing: .5px;
    margin-bottom: 13px;
}
.goods-list ul li .goods-padding .title a {
	color: #333;
}
.goods-list ul li .goods-padding .goods-num-type {
    display: block;
    position: relative;
    height: 16px;
    line-height: 16px;
}
.goods-list ul li .goods-padding .goods-num-type .goods-num {
    color: #787878;
}
.goods-list ul li .goods-padding .goods-num-type b {
    font-family: Arial;
    font-size: 12px;
    font-weight: 400;
    color: #fc903d;
    padding: 0 3px;
}
.goods-type {
    position: absolute;
    right: 0;
    top: 0;
}
.goods-type i {
    width: 16px;
    height: 16px;
    margin-left: 5px;
    float: left;
    background: url(../assets/images/index/cms_pc_img.png) no-repeat;
}
.goods-type i.tmall {
    background-position-x: -78px;
}
.goods-type i.trans {
    background-position-x: -104px;
}
.goods-type i.you {
    background-position-x: -52px;
}
</style>