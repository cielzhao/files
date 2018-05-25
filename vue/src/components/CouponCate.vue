<template>
	<div class="cate-wrap main-container">
    <div class="cate-list clearfix">
	        <span class="cate-lit-title">商品分类</span>
	        <ul>
            <li class="cate-item" v-for="(item, key) in cateData" :key="key" :data-item="key" @click="navStyle($event)">
  						<router-link :to="{path:'/coupon', query: {n:1, ca:key, sk:0}}">{{item}}</router-link>
						</li>
         </ul>
	    </div>

	    <!--<div class="cat-list sale-type clearfix">
	        <span class="cat-lit-title">促销类型</span>
	        <ul>
	            <li class="">
	                <a href="/index.php?r=l&amp;cid=0&amp;s=t&amp;seckill=1">秒杀活动</a>
	            </li>
	            <li class="">
	                <a href="/index.php?r=l&amp;cid=0&amp;s=t&amp;jipin=1">优选</a>
	            </li>
	            <li class="">
	                <a href="/index.php?r=l&amp;cid=0&amp;s=t&amp;tmall=1">天猫</a>
	            </li>
	            <li class="">
	                <a href="/index.php?r=l&amp;cid=0&amp;s=t&amp;freight=1">运费险</a>
	            </li>
	            <li class="">
	                <a href="/index.php?r=l&amp;cid=0&amp;s=t&amp;amoy=1">海淘</a>
	            </li>
	            <li class="cat-lit-video ">
	                <a href="/index.php?r=l&amp;cid=0&amp;s=t&amp;video=1"><span class="theme-span">视频商品</span></a>
	            </li>
	        </ul>
	    </div>-->

	</div>
</template>

<script>
import axios from 'axios'
import api from '../api/api.js'
import CouponLive from './CouponLive'

export default {
  name: 'Index',
  data () {
		return {
//			cateData: null
			cateData: [
				"服装",
				"化妆品",
				"居家日用",
				"美食",
				"母婴",
				"数码家电",
				"文体车品",
				"鞋包配饰"
			]
		}
	},
  components: {
    'CouponLive': CouponLive,
  },
  mounted() {
  	this.navStyle()
  },
  methods:{
		navStyle ($event) {
			let caQuery = this.$route.query.ca
			if(caQuery != undefined) {
				var cateIndex = caQuery
			} else {
				var cateIndex = 0
			}

			let cateItem = document.querySelectorAll('.cate-item')
			let cateLength = cateItem.length
			for(let i = 0; i < cateLength; i++) {
				cateItem[i].classList.remove("active")
			}
			cateItem[cateIndex].classList.add("active")
		}
  }
}
</script>

<style>
.cate-wrap {
    width: 1198px;
    border: 1px solid #eee;
    border-bottom: none;
    margin-bottom: 15px
}

.cate-wrap .cate-list {
    background: #f9f9f9;
    display: block;
    border-bottom: #eee 1px solid
}

.cate-wrap .cate-list .cate-lit-title {
    float: left;
    width: 100px;
    line-height: 50px;
    color: #999;
    text-align: center
}

.cate-wrap .cate-list ul {
    background: #fff;
    list-style: none;
    float: left;
    padding: 10px 0 10px 30px;
    line-height: 30px;
    width: 1068px
}

.cate-wrap .cate-list ul li {
    list-style: none;
    float: left;
    margin-right: 17px
}

.cate-wrap .cate-list ul li:last-child,.goods-list ul .no-right {
    margin-right: 0
}

.cate-wrap .cate-list ul li a b {
    font-family: Arial;
    font-weight: 400;
    color: #999;
    margin-left: 6px
}
.cate-wrap .cate-list ul li a, .cate-wrap .cate-list ul li a.link {
	color: #333;
}

.cate-wrap .sale-type ul li {
    margin-right: 30px
}

.cate-wrap .sale-type ul li a {
    padding-left: 18px
}

.cate-wrap .sale-type ul li i {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid #ccc;
    left: 0;
    top: 0
}

.cate-wrap .sale-type ul li.cate-lit-video span {
    text-indent: 8px;
    padding: 1px 3px 1px 12px;
    margin-left: 0;
    color: #ff6255;
    border: 1px solid #ff6255;
    border-radius: 2px;
    position: relative
}

.cate-wrap .sale-type ul li.cate-lit-video span:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 3px;
    height: 0;
    width: 0;
    border-left: 5px solid #ff6255;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 5px solid transparent
}

.cate-wrap .sale-type ul .active a i,.cate-wrap .sale-type ul li a:focus i,.cate-wrap .sale-type ul li a:hover i {
    border: 1px solid #ff6255
}

.cate-wrap .sale-type ul .active a i {
    background: url(../assets/images/index/cms_pc_img.png?v=20184103648381) -99px -80px no-repeat #ff6255
}
.cate-wrap .cate-list ul li.cate-item.active a,
.cate-wrap .cate-list ul li .router-link-exact-active.router-link-active {
	color: #ff6255
}
.cate-wrap .sort-wrap {
    position: absolute;
    top: 0;
    right: 0
}

.cate-wrap .sort-wrap .sort-text {
    font-size: 12px;
    color: #666
}

.cate-wrap .sort-wrap a {
    font-size: 12px;
    color: #5fa1ca
}

.cate-wrap .sort-wrap a.active,.cate-wrap .sort-wrap a:focus,.cate-wrap .sort-wrap a:hover {
    color: red
}

.cate-wrap .sort-wrap a.margin {
    margin-left: 10px
}

.tag-wrap {
    background-color: #f9f9f9;
    height: 38px;
    margin-bottom: 20px;
    width: 1198px;
    line-height: 38px;
    position: relative;
    border: 1px solid #eee
}
</style>