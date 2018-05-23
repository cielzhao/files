<template>
	<div class="wrapper">
		<Header></Header>
		<Nav></Nav>
		<CouponMain></CouponMain>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
import CouponMain from './CouponMain'
import Footer from './Footer'

export default {
  name: 'Index',
  components: {
    'Header': Header,
    'Nav': Nav,
    'CouponMain': CouponMain,
    'Footer': Footer,
  },
  computed:{

  },
  methods:{
  }
}
</script>

<style>

</style>