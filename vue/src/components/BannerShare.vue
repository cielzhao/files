<template>
	<div class="banner-right">
		<div class="share">
			<div class="bdsharebuttonbox" data-tag="share_1">
				<a href="#" class="bds_more" data-cmd="more"></a>
		    <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
		    <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
		    <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
		    <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
			</div>
		</div>
		<a class="snatch" href="javascript:;"></a>
		<img src="../assets/images/index/banner-share.jpg"/>
	</div>
</template>

<script>
export default {
  name: 'BannerShare',
  mounted() {
   try{
    window._bd_share_config = {
      "common": {
          "bdSnsKey": {},
          "bdText": "最近发现了一个领独享优惠券的网站，都是限时限量抢购，一般人享受不到的！性价比超高哦，分享给大家，保证你会惊喜滴！",
          "bdMini": "2",
          "bdMiniList": false,
          "bdPic": "",
          "bdStyle": "0",
          "bdSize": "24"
      }, "share": {}
    };
//	      with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
	  }catch(error){

	  }
  }
}
</script>

<style>
#banner .banner-right {
	position: relative;
	width: 240px;
}
#banner .share {
	position: absolute;
  top: 95px;
  left: 48px;
}
#banner .snatch {
	position: absolute;
  display: block;
  width: 100%;
  height: 143px;
  top: 156px;
}
</style>