<template>
	<div class="banner-center col-md-8 col-sm-12">
	  <swiper id="swiperWrap" :options="swiperOption" ref="mySwiper">
	    <!-- slides -->
	    <swiper-slide v-for="(item, key) in imgList" :key="key" :style="{backgroundImage: 'url(' + item.image + ')'}"></swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	  </swiper>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import img1 from '../assets/images/index/banner-img1.jpg'
import img2 from '../assets/images/index/banner-img2.jpg'
import img3 from '../assets/images/index/banner-img3.jpg'

export default {
  name: 'BannerSwiper',
  data() {
    return {
    	imgList: [
    		{
    			'image': img1
    		},
    		{
    			'image': img2
    		},
    		{
    			'image': img3
    		}
    	],
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
		    grabCursor: true,
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
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
  }
}
</script>

<style>
.swiper-slide {
	background-size: cover;
	height: 300px;
}
</style>