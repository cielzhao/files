<template>
	<div class="cate-wrap main-container">
    <div class="cate-list clearfix">
      <span class="cate-lit-title">商品分类</span>
      <ul>
        <li class="cate-item" :class="[cataIndex==key ? 'active' : '']" v-for="(item, key) in cateData" :key="key" :data-item="key" @click="navStyle()">
					<router-link :to="{path:'/coupon', query: {n:1, t:key, st:0, sk:0}}">{{item}}</router-link>
				</li>
      </ul>
	 	</div>
	</div>
</template>

<script>
import axios from 'axios'
import api from '../api/api.js'
import { mapMutations } from 'vuex'
import CouponLive from './CouponLive'

export default {
  name: 'Index',
  data () {
		return {
			cateData: null,
			cataIndex: null
		}
	},
  components: {
    'CouponLive': CouponLive,
  },
	created() {
		this.fetchData()
	},
  nextTick() {
  	this.navStyle()
  },
  methods:{
  	fetchData() {
			const _this = this
    	let apiUrl = api.cateApi
      axios.get(apiUrl).then(function (response) {
      	_this.cateData = response.data
      }).catch((error) => {
        console.log(error)
      })

      this.cataIndex = this.$route.query.t
		},
		navStyle () {
			let tParam = this.$route.query.t
			if(!tParam) {
				tParam = 0
			}

			let cateItem = document.querySelectorAll('.cate-item')
			let cateLength = cateItem.length
			for(let i = 0; i < cateLength; i++) {
				cateItem[i].classList.remove("active")
			}
			cateItem[tParam].classList.add("active")

			window.localStorage.setItem('tParam', tParam)
			this.$store.commit('priceOptionHide')
		}
  },
  watch: {
    '$route' (to, from) {
      this.navStyle()
    }
  }
}
</script>

<style>
.cate-wrap {
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
    padding: 10px 0 10px 20px;
    line-height: 30px;
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
    background: url(../assets/images/index/cms_pc_img.png) -99px -80px no-repeat #ff6255
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
    margin-bottom: 50px;
    line-height: 38px;
    position: relative;
    border: 1px solid #eee
}
@media only screen and (max-width: 575px) {
	.cate-wrap .cate-list .cate-lit-title {
		float: none;
    line-height: 30px;
    margin-left: 10px;
	}
	.cate-wrap .cate-list ul {
    padding: 0 0 10px 10px;
	}
}
</style>