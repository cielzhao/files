<template>
	<div id="main">
		<div class="container">
			<CouponCate></CouponCate>
			<CouponSort></CouponSort>
			<CouponLive></CouponLive>
		</div>
	</div>
</template>

<script>
import CouponCate from './CouponCate'
import CouponSort from './CouponSort'
import CouponLive from './CouponLive'

export default {
  name: 'CouponMain',
  components: {
    'CouponCate': CouponCate,
    'CouponSort': CouponSort,
    'CouponLive': CouponLive,
  },
  computed:{

  },
  methods:{
  }
}
</script>

<style>

</style>