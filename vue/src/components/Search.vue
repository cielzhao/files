<template>
	<div class="wrapper">
		<Header></Header>
		<Nav></Nav>
		<div id="main">
			<div class="container">
				<CouponSort></CouponSort>
				<CouponLive></CouponLive>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
import CouponSort from './CouponSort'
import CouponLive from './CouponLive'
import Footer from './Footer'

export default {
  name: 'Index',
  components: {
    'Header': Header,
    'Nav': Nav,
    'CouponSort': CouponSort,
    'CouponLive': CouponLive,
    'Footer': Footer,
  },
  computed:{

  },
  methods:{
  }
}
</script>

<style scoped>
.tag-wrap {
	position: relative;
  margin-top: 20px;
}
</style>