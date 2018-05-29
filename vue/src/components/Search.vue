<template>
	<div class="wrapper">
		<Header></Header>
		<Nav></Nav>
		<div id="main">
			<div class="container">
				<CouponSort1></CouponSort1>
				<CouponLive></CouponLive>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
import CouponSort1 from './CouponSort1'
import CouponLive from './CouponLive'
import Footer from './Footer'

export default {
  name: 'Index',
  components: {
    'Header': Header,
    'Nav': Nav,
    'CouponSort1': CouponSort1,
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