<template>
	<div class="hot" :data-id="requestId">
		<div class="hot-head">
			<div class="hot-head-left fl">
        <h1 style="color: #585858;font-weight: normal;">领券秒杀精选</h1>
        <span>/</span>
        <span>实时更新</span>
        <span>/</span>
        <span>独享优惠券</span>
      </div>
      <div class="hot-head-right fr">
        <span>/</span>
        <span>将优选、性价比做到极致</span>
        <span>/</span>
      </div>
		</div>
		<div class="hot-product">
			<div class="product-list" v-for="(item, key) in hotDataList" :key="key">
        <a class="main-img" href="javascript:;" target="_blank" @click="toDetail(key)">
          <img :src="item.商品主图">
        </a>
        <div class="product-intro fr">
            <p class="product-title">
                <a  href="javascript:;" target="_blank" :title="item.title" >{{item.商品名称}}</a>
            </p>
            <div class="product-price">
                <span v-if="item.优惠券面额.indexOf('减')!=-1">券<b><i>￥</i>{{item.优惠券面额.slice(item.优惠券面额.indexOf("减")+1, item.优惠券面额.length-1)}}</b></span>
                <span v-else="item.优惠券面额.indexOf('减')==-1">券<b><i>￥</i>{{item.优惠券面额.slice(0, item.优惠券面额.indexOf("元"))}}</b></span>
                <div class="shop">店铺名称：{{item.店铺名称}}</div>
            </div>
            <div class="residue">优惠券总数<i>{{item.优惠券总量}}</i>张，剩余<i>{{item.优惠券剩余量}}</i>张</div>
            <div class="buy">
                <div class="buy-price" v-if="item.优惠券面额.indexOf('减')!=-1">{{item.商品价格 - item.优惠券面额.slice(item.优惠券面额.indexOf("减")+1, item.优惠券面额.length-1)}}</div>
                <div class="buy-price" v-else="item.优惠券面额.indexOf('减')==-1">{{item.商品价格 - item.优惠券面额.slice(0, item.优惠券面额.indexOf("元"))}}</div>
                <div class="old-price">
                    <p><i>￥</i>{{item.商品价格}}</p>
                    <span>券后价</span>
                </div>
                <div class="go-buy">
                    <a :href="item.优惠券短链接" target="_blank">去抢购</a>
                </div>
            </div>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import api from '../api/api.js'

export default {
	name: 'CouponHot',
	data() {
		return {
			hotData: null,
			hotDataList: null,
			requestId: '',
			pageId: 0
		}
	},
  created() {
	 	this.fetchData()
  },
	methods: {
		fetchData () {
			const _this = this
    	let apiUrl = api.curApi + "fz.php"
      axios.get(apiUrl).then(function (response) {
      	console.log(response.data)
      	_this.hotData = response.data
      	_this.hotDataList = _this.hotData.data
      	_this.requestId = _this.hotDataList.商品id
      }).catch((error) => {
        console.log(error)
      })
    },
    toDetail (key) {
    	let id = this.hotDataList[key].商品id
    	let curDetail = this.hotDataList[key]
    	sessionStorage.setItem("curDetail", JSON.stringify(curDetail)) //本地缓存数据
			this.$router.push({ name: 'Detail', query: { detailId: id }})
    }
	}
}
</script>

<style>
.product-list {
	height: 276px;
  width: 540px;
  margin-bottom: 20px;
  display: inline-block;
  border: 1px solid #eee;
  background-color: #fffcfd;
}
.product-list:nth-child(2n) {
	float: right;
}
.product-list:hover {
	border-color: red;
}
.product-list .main-img img {
	max-width: 272px;
	height: 272px;
	border: 0;
}
.product-intro {
	width: 240px;
    margin: 26px 0 26px 20px;
}
.product-title {
	font-size: 15px;
    padding: 0 15px 0 0;
    height: 70px;
    overflow: hidden;
}
.product-title a {
	color: #999;
}
.product-price {
	font-size: 14px;
    margin-top: 6px;
    position: relative;
    overflow: hidden;
    height: 26px;
}
.product-price span {
	position: relative;
    left: 0;
    font: 12px Simsun;
    text-align: center;
    background: #fff7fa;
    color: #ff0060;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    margin: 0 10px 0 0;
    border: 1px dotted #ff0060;
    float: left;
    border-left: none;
    border-right: none;
}
.product-price .shop {
	margin-top: 4px;
    height: 16px;
    line-height: 29px;
    color: #fc7e91;
    padding-right: 5px;
}
.residue {
	margin-top: 10px;
    font-size: 12px;
    color: #333;
}
.residue i {
	padding: 0 5px;
    color: #FF435E;
    font-size: 14px;
    font-weight: 700;
    font-family: Arial;
}
.buy {
	background-color: #FF435E;
    color: #fff;
    font-size: 15px;
    margin-top: 35px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: relative;
    display: block;
}
.buy .buy-price {
	font: 30px Arial;
  font-weight: 700;
  padding-top: 10px;
  padding-left: 5px;
  float: left;
}
.buy .old-price {
	float: left;
    height: 30px;
    margin: 10px 0 10px 10px;
    text-align: left;
}
.buy .old-price p {
	display: block;
    height: 16px;
    margin: 0;
    padding: 0;
    color: #fef181;
    line-height: 16px;
    text-decoration: line-through;
}
.buy .old-price span {
	display: block;
    height: 12px;
    font: 12px/12px "Microsoft Yahei";
    color: #fff;
}
.buy .go-buy {
	position: absolute;
    right: 0;
    background: #fef490;
    background: -webkit-gradient(linear,0 0,right 0,from(#fef490),to(#fee44d));
    background: -moz-linear-gradient(left,#fef490,#fee44d);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#fef490, endColorstr=#fee44d);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=1, startColorstr=#fef490, endColorstr=#fee44d)";
    background: -o-linear-gradient(left,#fef490,#fee44d);
    width: 80px;
    font-size: 16px;
    text-align: center;
    font-family: "Microsoft Yahei";
}
.buy .go-buy a:before {
	position: absolute;
    display: block;
    content: "";
    top: 0;
    left: -12px;
    border-top: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-right: 12px solid #fef490;
    width: 0;
    height: 0;
}
.buy .go-buy a, .buy .go-buy a:hover {
	color: #f61d5a;
    display: block;
}
</style>