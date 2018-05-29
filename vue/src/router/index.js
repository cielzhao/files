import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Coupon from '@/components/Coupon'
import Search from '@/components/Search'
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
    	name: 'Home',
      path: '/',
      component: Home
    },
    {
    	name: 'index',
      path: '/index',
      component: Index
    },
    {
    	name: 'coupon',
      path: '/coupon',
      component: Coupon
    },
    {
    	name: 'search',
      path: '/search',
      component: Search
    },
    {
    	name: 'Detail',
      path: '/Detail/:pageId',
      component: Detail,
      children: [
        {
        	redirect: {
			      name: 'Header'
			    },
			    path: 'Header',
			    component: Header
        },
        {
        	redirect: {
			      name: 'Nav'
			    },
			    path: 'Nav',
			    component: Nav
        },
        {
        	path: 'DetailMain',
        	component: DetailMain,
        	children: [
		        {
		        	redirect: {
					      name: 'CouponHot'
					    },
		        	path: 'CouponHot',
		        	component: CouponHot
		        },
		        {
		        	redirect: {
					      name: 'CouponLive'
					    },
		        	path: 'CouponLive',
		        	component: CouponLive
		        },
		      ]
        },
        {
        	redirect: {
			      name: 'Footer'
			    },
			    path: 'Footer',
			    component: Footer
        },
      ]
    }
  ]
})
