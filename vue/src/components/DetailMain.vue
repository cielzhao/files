<template>
	<div id="main">
		<div class="container">
			<div class="row">
				<div class="divider">亲爱的，欢迎每天来选购超值优惠商品哦~</div>
				<div class="detail">
					<div class="detail-img col-md-4 col-sm-12">
						<a rel="nofollow" :href="curDetail.商品详情页链接地址" target="_blank" class="img" :data-id="curDetail.商品id">
	            <img class="lg-img" :src="curDetail.商品主图" alt="">
	          </a>
					</div>

					<div class="detail-info col-md-8 col-sm-12">
	            <a class="title clearfix" :href="curDetail.优惠券短链接" target="_blank">
	              <span class="tmall" v-if="curDetail.user_type == 0"></span>
	              <span class="taobao" v-if="curDetail.user_type == 1"></span>
	              <span class="title">{{curDetail.店铺名称}}</span>
							</a>
							<!--<a href="javascript:;" class="pc-spjc"><i></i>商品反馈</a>-->

	            <!--<div class="desc">
	              <span>推荐理由：新派高端棕系列，木制礼盒装，适合商务送礼（可定制商务logo，私聊店主哦），细节决定品质，送礼首选！</span>
	            </div>-->

	            <div class="coupon-wrap clearfix">
	              <span class="now-price"><b class="theme-color-8">(独享)</b>券后价&nbsp;&nbsp;&nbsp;<b>¥<i>{{curPrice}}</i></b></span>
	              <span class="org-price">在售价&nbsp;&nbsp;¥<i>{{curDetail.商品价格}}</i></span>
	            </div>

	            <div class="text-wrap">
	                <span class="text-wrap-span">优惠券总数<i>{{curDetail.优惠券总量}}</i>张</span>
	                <span>已有<i>{{curDetail.优惠券剩余量}}</i>人购买</span>
	            </div>
	            <div class="buy-time">
	                <span class="text-wrap-span">开始时间：<i>{{curDetail.优惠券开始时间}}</i></span>
	                <span>结束时间：<i>{{curDetail.优惠券结束时间}}</i></span>
	            </div>

	            <!--商品领券状态s-->
	            <div class="ehy-normal clearfix">
	                <div class="buy-coupon">
	                    <span>优惠券</span>
	                    <span><b><i>￥</i>{{curReduce}}</b></span>
	                </div>
	                <a :href="curDetail.优惠券短链接" target="_blank">领券购买</a>
	            </div>
	            <!--商品领券状态e-->

	            <!--商品图标s-->
	            <div class="goods-tit-type">
	              <div class="goods-type">
	                <i class="tmall" title="天猫"></i>
	              </div>
	            </div>
	            <!--商品图标e-->

	            <!--分享链接s-->
	            <!--<div class="text2">
	              <span>如果您喜欢此宝贝，记得分享给您的朋友，一起享优惠：</span>
	            </div>-->
	            <!--分享链接e-->
	        </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'DetailMain',
	data() {
		return {
			curDetail: null,
			curPrice: '',
			curReduce: ''
		}
	},
	created () {
    this.getData()
  },
	methods: {
		getData() {
			this.curDetail = JSON.parse(sessionStorage.getItem("curDetail")) //获取缓存数据
			console.log(this.curDetail)
			this.curReduce = this.curDetail.优惠券面额.match(/减(\S*)元/)[1]
			this.curPrice = this.curDetail.商品价格 - this.curReduce
			console.log(this.curPrice)
		}
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
.detail {
    position: relative;
    background-color: #fff;
    padding: 20px;
    width: 100%;
}

.detail .nav-wrap {
    margin-bottom: 30px;
    display: block
}

.detail .nav-wrap .text {
    font-size: 12px;
    color: #aaa
}

.detail .nav-wrap .text span {
    color: #666;
    margin-left: 6px
}

.detail .nav-wrap .text a {
    padding: 0 5px;
    color: #aaa
}

.detail .nav-wrap .text a:focus,.detail .nav-wrap .text a:hover {
    color: #FF6C00
}

.no-cursor {
    cursor: default
}

.detail {
    margin-bottom: 20px
}

.detail a.img {
    float: left;
    padding: 20px;
}

.detail a.img img {
    display: block;
    border: 0;
    width: 328px;
    height: 328px
}

.detail .detail-info {
    position: relative;
    float: left;
    width: 590px;
    height: 400px;
    margin-left: 50px;
    font-family: "Microsoft YaHei"
}

.detail .detail-info a.title .tmall {
    background: url(../assets/images/index/tmall.png) no-repeat;
    width: 16px;
    height: 16px;
    display: block;
    float: left;
    margin-top: 7px
}

.detail .detail-info a.title .taobao {
    background: url(../assets/images/index/taobao.png) no-repeat;
    width: 16px;
    height: 16px;
    display: block;
    float: left;
    margin-top: 7px
}

.detail .detail-info a.title span.title {
    float: left;
    width: auto;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    display: block;
    font-size: 18px;
    color: #424242;
    margin-left: 0;
}

.detail .detail-info .desc {
    width: 100%;
    line-height: 20px;
    margin-top: 10px;
    color: #5C5C5C;
    font-size: 14px;
    height: 60px;
    overflow: hidden
}

.detail .detail-info .desc span {
    color: #ed145b
}

.detail .detail-info .coupon-wrap {
    line-height: 30px;
    margin: 30px auto 20px;
    padding: 20px;
    position: relative;
    background: url(../assets/images/index/show-price-bg.jpg) no-repeat;
    background-size: cover
}

.detail .detail-info .coupon-wrap .org-price {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #acacac
}

.detail .detail-info .coupon-wrap .org-price i {
    margin-left: 2px
}

.detail .detail-info .coupon-wrap .now-price {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #4e4e4e;
    margin-right: 50px
}

.detail .detail-info .coupon-wrap .now-price b {
    color: #ed145b;
    font-weight: 400;
    font-family: Arial
}

.detail .detail-info .coupon-wrap .now-price b i {
    margin-left: 5px;
    font-size: 30px;
    font-weight: 700
}

.detail .detail-info .text-wrap {
    height: 36px;
    line-height: 16px;
    padding: 10px 0;
    border-top: 1px dotted #C9C9C9;
    border-bottom: 1px dotted #C9C9C9;
    font-size: 12px;
    color: #8E8787
}

.detail .detail-info .text-wrap span i {
    margin: 0 5px;
    color: #ed145b;
    font-family: Arial
}

.detail .detail-info .text-wrap span.text-wrap-span {
    border-right: 1px solid #E5DFDA;
    padding: 0 20px;
    margin-right: 20px
}

.detail .detail-info .buy-step {
    position: relative;
    width: 100%;
    margin: 50px auto 0
}

.detail .detail-info .buy-step .buy-step-text {
    float: left;
    width: 30px;
    height: 38px;
    line-height: 19px;
    margin-top: 7px;
    margin-right: 30px;
    color: #727272;
    font-size: 14px
}

.detail .detail-info .buy-step .buy-step-first {
    float: left;
    width: 145px;
    height: 52px;
    background-color: #F2EBCF;
    overflow: hidden
}

.detail .detail-info .buy-step .buy-step-first span {
    float: left;
    width: 79px;
    height: 40px;
    padding: 6px 0;
    color: #ed145b;
    text-align: center
}

.detail .detail-info .buy-step .buy-step-first span i {
    display: block;
    font-size: 12px;
    line-height: 18px
}

.detail .detail-info .buy-step .buy-step-first span b {
    display: block;
    font-size: 20px;
    line-height: 22px;
    font-weight: 400
}

.detail .detail-info .buy-step .buy-step-first .coupon-btn {
    float: right;
    width: 37px;
    height: 36px;
    line-height: 18px;
    padding: 8px 11px 8px 17px;
    text-align: center;
    font-size: 12px;
    letter-spacing: .1em;
    color: #FFF;
    /*background: url(../assets/images/index/coupon-btn.png) no-repeat;*/
    transition: font-size .3s
}

.detail .detail-info .buy-step .buy-step-first .coupon-btn:hover {
    font-size: 14px
}

.detail .detail-info .buy-step .buy-step-sec {
    float: left;
    width: 145px;
    height: 52px;
    line-height: 52px;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    background-color: #ed145b;
    transition: font-size .3s
}

.detail .detail-info .buy-step .buy-btn:hover {
    font-size: 16px
}

.detail .detail-info .buy-step .double-arrow {
    position: relative;
    float: left;
    width: 68px;
    height: 52px
}

.detail .detail-info .buy-step .double-arrow span {
    position: absolute;
    top: 23px;
    left: 50%;
    display: block;
    width: 24px;
    height: 11px;
    margin-left: -12px;
    /*background: url(../assets/images/index/arrow-right.png) center center no-repeat*/
}

.detail .detail-info .ehy-disabled,.detail .detail-info .ehy-normal {
    height: 52px;
    position: relative;
    display: block;
    width: 150px;
    text-align: center;
    line-height: 52px;
    background: #ed145b;
    margin-top: 50px;
    padding-left: 60px;
    color: #ed145b
}

.detail .detail-info .ehy-disabled {
    background: #ccc;
    color: #aaa
}

.detail .detail-info .ehy-disabled p,.detail .detail-info .ehy-normal a {
    color: #fff;
    display: block
}

.detail .detail-info .buy-coupon {
    position: absolute;
    width: 60px;
    height: 52px;
    background: url(../assets/images/index/cms_pc_img.png) -30px -129px no-repeat;
    left: 0;
    top: 0
}

.detail .detail-info .ehy-disabled .buy-coupon {
    background-position-x: -100px
}

.detail .detail-info .buy-coupon span {
    height: 18px;
    line-height: 25px;
    margin: 2px auto;
    display: block
}

.detail .detail-info .buy-coupon span b {
    font-weight: 400;
    font-size: 20px;
    font-family: "Microsoft Yahei"
}

.detail .detail-info .buy-coupon span b i {
    font-size: 12px
}

/*.detail .detail-info .text2 {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    color: #b1b1b1;
    text-align: left
}

.detail .detail-info .text2 span {
    display: inline-block;
    vertical-align: middle
}

.detail .detail-info .text2 .bdshare {
    display: inline-block;
    vertical-align: middle;
    width: 100px;
    position: static
}*/

.detail .detail-info .bdshare {
    font-size: 12px;
    color: #b1b1b1;
    position: absolute;
    right: 10px;
    top: 10px
}
.detail .sm-img li {
    width: 55px;
    height: 55px;
    float: left;
    margin-left: 13px;
    margin-top: 13px;
    cursor: auto
}

.detail .sm-img li:first-child {
    margin-left: 0
}

.detail .sm-img li img {
    width: 55px;
    height: 55px;
    display: block;
    border: 1px solid transparent;
    cursor: pointer
}

.detail .sm-img li img:hover {
    border: 1px solid red
}
.buy-time {
	border-bottom: 1px dotted #C9C9C9;
}
.buy-time span {
	display: inline-block;
  line-height: 16px;
  padding: 10px 0;
  font-size: 12px;
  color: #8E8787;
}
.buy-time span.text-wrap-span {
	  border-right: 1px solid #E5DFDA;
    padding: 0 20px;
    margin-right: 20px;
}
.buy-time span i {
  margin: 0 5px;
  color: #ed145b;
  font-family: Arial;
}
@media only screen and (max-width: 575px) {
	.detail {
		padding: 0;
	}
	.detail .detail-info {
    width: 100%;
    margin-left: 0;
    padding: 20px;
	}
}
@media only screen and (min-width: 576px) and (max-width: 1024px) {
	.detail .detail-info {
    width: 100%;
    margin-left: 0;
	}
}
</style>