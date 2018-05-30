<template>
	<div class="banner-center col-md-8 col-sm-12">
	  <swiper id="swiperWrap" :options="swiperOption" ref="mySwiper">
	    <!-- slides -->
	    <swiper-slide v-for="(item, key) in imgData" :key="key" :style="{backgroundImage: 'url(' + item.商品主图 + ')'}" @click="toDetail(key)">
	    	<div class="swiper-to-detail" @click="toDetail(key)"></div>
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	  </swiper>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import api from '../api/api.js'
export default {
  name: 'BannerSwiper',
  data() {
    return {
    	imgData: null,
      swiperOption: {
        autoplay: {
			    delay: 3000,
			    stopOnLastSlide: false,
			    disableOnInteraction: false,
			  },
        pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      loop: true,
        navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		    grabCursor: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created() {
		this.fetchData()
	},
  mounted() {
    /*鼠标移入停止轮播，鼠标离开 继续轮播*/
		let mySwiper = document.getElementById('swiperWrap');
		mySwiper.onmouseenter = function () {
		  this.swiper.autoplay.stop();
		};
		mySwiper.onmouseleave = function () {
		  this.swiper.autoplay.start();
		}
  },
  methods: {
  	fetchData() {
			const _this = this
    	let apiUrl = api.searchApi + '?t=t'
      axios.get(apiUrl).then(function (response) {
      	let data0 = response.data.data[0]
      	let data1 = response.data.data[1]
      	let data2 = response.data.data[2]
      	_this.imgData = [
      		data0,
      		data1,
      		data2
      	]
      }).catch((error) => {
        console.log(error)
      })
		},
		toDetail (key) {
			let id = this.imgData[key].商品id
    	let curDetail = this.imgData[key]
    	sessionStorage.setItem("curDetail", JSON.stringify(curDetail)) //本地缓存数据
			this.$router.push({ path: 'Detail', query: { detailId: id }})
    }
  }
}
</script>

<style>
#swiperWrap {
	height: 300px;
}
#swiperWrap .swiper-slide {
	background-size: cover;
	height: 300px;
}
#swiperWrap .swiper-to-detail {
	width: 100%;
	height: 100%;
}
</style>