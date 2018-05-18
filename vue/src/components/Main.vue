<template>
	<div id="main">
		<div class="container">
			<div class="divider">亲爱的，欢迎每天来选购超值优惠商品哦~每天都会准时更新</div>
			<div class="coupon">
				<CouponHot></CouponHot>
			</div>
		</div>
	</div>
</template>

<script>
import CouponHot from './CouponHot'
import CouponLive from './CouponLive'

export default {
	name: 'Main',
	components: {
    'CouponHot': CouponHot,
    'CouponLive': CouponLive,
  }
}
</script>

<style>
#main .divider {
	width: 100%;
	height: 45px;
  margin: 15px auto;
  padding: 0 10px;
  background-color: #FDFCE7;
  border: 1px solid #ffd6d6;
  letter-spacing: 1px;
  text-align: left;
  word-break: break-all;
  line-height: 45px;
}
#main .hot-head {
	width: 100%;
	height: 50px;
}
#main .hot-head-left h1 {
	display: inline-block;
	margin-top: 0;
  font-size: 20px;
}
#main .hot-head-left span,
#main .hot-head-right span {
	color: #fbacc2;
}
#main .hot-head-left .tatal {
	margin: 0 6px;
  letter-spacing: 0;
  font-size: 17px;
	background-color: #5dcac5;
  color: #fff;
  padding: 3px 7px;
  border-radius: 15px;
  font-family: 'Arial';
  margin-left: 10px;
}
</style>