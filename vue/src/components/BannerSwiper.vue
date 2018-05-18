<template>
	<div class="banner-center">
	  <swiper id="swiperWrap" :options="swiperOption" ref="mySwiper">
	    <!-- slides -->
	    <swiper-slide><img src="../assets/images/index/banner-img1.jpg" alt="First slide"></swiper-slide>
	    <swiper-slide><img src="../assets/images/index/banner-img2.jpg" alt="Second slide"></swiper-slide>
	    <swiper-slide><img src="../assets/images/index/banner-img3.jpg" alt="Third slide"></swiper-slide>
	    <swiper-slide><img src="../assets/images/index/banner-img4.jpg" alt="Fourth slide"></swiper-slide>
	    <swiper-slide><img src="../assets/images/index/banner-img5.jpg" alt="Fifth slide"></swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	  </swiper>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'BannerSwiper',
  data() {
    return {
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
#banner .banner-center {
	width: 710px;
}
</style>