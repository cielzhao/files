import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Banner from '@/components/Banner'
import BannerSwiper from '@/components/BannerSwiper'
import BannerShare from '@/components/BannerShare'
import Main from '@/components/Main'
import CouponHot from '@/components/CouponHot'
import CouponLive from '@/components/CouponLive'
import Footer from '@/components/Footer'
import Detail from '@/components/Detail'
import DetailMain from '@/components/DetailMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index,
      children: [
        {name: 'Header', path: '/', component: Header},
        {name: 'Nav', path: '/', component: Nav},
        {
        	name: 'Banner',
        	path: '/',
        	component: Banner,
        	children: [
		        {name: 'BannerSwiper', path: '/', component: BannerSwiper},
		        {name: 'BannerShare', path: '/', component: BannerShare},
		      ]
        },
        {
        	name: 'Main',
        	path: '/',
        	component: Main,
        	children: [
		        {name: 'CouponHot', path: '/', component: CouponHot},
		        {name: 'CouponLive', path: '/', component: CouponLive},
		      ]
        },
        {name: 'Footer', path: '/', component: Footer},
      ]
    },
    {
      name: 'Detail',
      path: '/Detail',
      component: Detail,
      children: [
        {name: 'Header', path: '/', component: Header},
        {name: 'Nav', path: '/', component: Nav},
        {
        	name: 'DetailMain',
        	path: '/',
        	component: DetailMain,
        	children: [
		        {name: 'CouponHot', path: '/', component: CouponHot},
		        {name: 'CouponLive', path: '/', component: CouponLive},
		      ]
        },
        {name: 'Footer', path: '/', component: Footer},
      ]
    }
  ]
})
