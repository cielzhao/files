<template>
	<div id="banner" v-if="curBannerState">
		<div class="container">
			<div class="row">
				<BannerNav></BannerNav>
				<BannerSwiper></BannerSwiper>
				<BannerShare></BannerShare>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';
import BannerNav from './BannerNav'
import BannerSwiper from './BannerSwiper'
import BannerShare from './BannerShare'

export default {
	name: 'Banner',
	data () {
		return {
			curState: true
		}
	},
	components: {
    'BannerNav': BannerNav,
    'BannerSwiper': BannerSwiper,
    'BannerShare': BannerShare,
  },
	computed:{
    curBannerState() {
    	if(!this.curState) {
    		this.curState = window.localStorage.getItem('bannerStateValue');
    	}

    	console.log(this.curState)
    	return this.curState
    }
  }
}
</script>

<style>
.col-md-2, .col-md-8 {
	padding-left: 0;
	padding-right: 0;
}
</style>