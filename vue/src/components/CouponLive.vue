<template>
	<div class="live">
		<div class="live-inner" v-if="hotLength != 0">
			<div class="hot-head">
				<div class="hot-head-left fl">
	        <h1>领券优惠<span class="tatal" v-if="hotLength">{{hotLength}}</span></h1>
	      </div>
	      <!--<div class="hot-head-right fr">
	        <span style="color: #505050;">更多优惠 »</span>
	      </div>-->
			</div>
			<div class="goods-list">
				<ul class="clearfix">
					<li v-for="(item, key) in hotDataList" :key="key">
	          <a href="javascript:;" class="img" target="_blank" @click="toDetail(key)">
	            <i class="today-new"></i>
	            <img :src="item.商品主图" alt="">
	          </a>
	          <div class="goods-padding">
	            <div class="coupon-wrap clearfix">
	              <span class="price"><b><i>￥</i>{{newPrice(item.商品价格, item.优惠券面额)}}</b>券后价</span>
	              <span class="coupon">券<b><i>￥</i>{{couponVal(item.优惠券面额)}}</b></span>
	            </div>
	            <div class="title">
	              <a href="javascript:;">{{item.商品名称}}</a>
	            </div>
	            <div class="goods-num-type">
	              <span class="goods-num">销量<b>{{item.商品月销量}}</b></span>
	              <div class="goods-type">
	              	<i class="tmall" title="天猫"></i><i class="trans" title="运费险"></i><i class="you" title="优品"></i><i class="miaosha" title="秒杀"></i>                                </div>
	          		</div>
	          </div>
	        </li>
				</ul>
			</div>
		</div>
		<div v-else="hotLength == 0">
			对不起，未搜索到相关内容！
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import api from '../api/api.js'

export default {
	name: 'CouponLive',
	data() {
		return {
			hotDataList: null,
			hotLength: 0,
		}
	},
  created() {
	 	this.fetchData()
  },
	methods: {
		fetchData () {
			const _this = this
			let fParam = this.$route.query.f
			let tParam = this.$route.query.t
			let qParam = this.$route.query.q
			let sParam = this.$options.methods.isParam(this.$route.query.s, 0)
			let cParam = this.$options.methods.isParam(this.$route.query.c, 30)
			let skParam = this.$options.methods.isParam(this.$route.query.sk, 0)
			let sdParam = this.$options.methods.isParam(this.$route.query.sd, 0)
			let psParam = this.$options.methods.isParam(this.$route.query.ps, 0)
			let peParam = this.$options.methods.isParam(this.$route.query.pe, 1000)

			console.log('fParam=' + fParam)
//			console.log('qParam=' + qParam)
//			console.log('sParam=' + sParam)
//			console.log('cParam=' + cParam)
//			console.log('skParam=' + skParam)
//			console.log('sdParam=' + sdParam)
//			console.log('psParam=' + psParam)
//			console.log('peParam=' + peParam)

			var apiUrl = api.searchApi
			if(fParam === 'search') {
				var searchParams = {q: qParam, s: sParam, c: cParam, sk: skParam, sd: sdParam, ps: psParam, pe: peParam}
			} else {
				var searchParams = {t: tParam, s: sParam, c: cParam, sk: skParam, sd: sdParam, ps: psParam, pe: peParam}
			}



      axios.get(apiUrl, {params: searchParams}).then(function (response) {
      		_this.hotDataList = response.data.data
    			_this.hotLength = response.data.total
      }).catch((error) => {
        console.log(error)
      })
    },
    toDetail (key) {
    	let id = this.hotDataList[key].商品id
    	let curDetail = this.hotDataList[key]
    	sessionStorage.setItem('curDetail', JSON.stringify(curDetail)) //本地缓存数据
			this.$router.push({ path: 'Detail', query: { detailId: id }})
    },
		isParam (param, value) {
			if(param) {
				param = param;
			}else {
				param = value
			}
			return param;
		},
    couponVal(val) {
			if(val.indexOf('减') != -1) {
				var couponVal = val.slice(val.indexOf("减")+1, val.length-1)
			} else {
				var couponVal = val.slice(0, val.indexOf("元"))
			}
			return couponVal
		},
		newPrice(oldPrice, val) {
			if((val.indexOf('减')) != -1) {
				var couponVal = val.slice(val.indexOf("减")+1, val.length-1)
			} else {
				var couponVal = val.slice(0, val.indexOf("元"))
			}
			let newPrice = (oldPrice - couponVal).toFixed(2)
			return newPrice
		}
	},
	watch: {
    '$route' (to, from) {
      this.fetchData()
    }
  }
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
.goods-list ul li a.img img {
    border: none;
    max-width: 284px;
    max-height: 284px;
    vertical-align: middle;
}
</style>