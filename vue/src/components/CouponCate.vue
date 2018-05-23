<template>
	<div class="cat-wrap main-container">
    <div class="cat-list clearfix">
	        <span class="cat-lit-title">商品分类</span>
	        <ul>
            <li class="active">
                <a class="theme-a" href="javascript:;">全部优惠<b class="theme-b">(66528)</b></a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=1&amp;u=925820">
                    女装<b class="theme-b">(7143)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=9&amp;u=925820">
                    男装<b class="theme-b">(4126)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=10&amp;u=925820">
                    内衣<b class="theme-b">(4176)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=2&amp;u=925820">
                    母婴<b class="theme-b">(7866)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=3&amp;u=925820">
                    化妆品<b class="theme-b">(4062)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=4&amp;u=925820">
                    居家<b class="theme-b">(13749)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=5&amp;u=925820">
                    鞋包配饰<b class="theme-b">(9080)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=6&amp;u=925820">
                    美食<b class="theme-b">(6431)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=7&amp;u=925820">
                    文体车品<b class="theme-b">(5356)</b>
                </a>
            </li>
            <li class="">
                <a class="theme-a" data-page="page=1" href="/index.php?r=l&amp;cid=8&amp;u=925820">
                    数码家电<b class="theme-b">(4539)</b>
                </a>
            </li>
         </ul>
	    </div>

	    <div class="cat-list sale-type clearfix">
	        <span class="cat-lit-title">促销类型</span>
	        <ul>
	            <li class="">
	                <a class="theme-a" href="/index.php?r=l&amp;cid=0&amp;s=t&amp;seckill=1">秒杀活动</a>
	            </li>
	            <li class="">
	                <a class="theme-a" href="/index.php?r=l&amp;cid=0&amp;s=t&amp;jipin=1">优选</a>
	            </li>
	            <li class="">
	                <a class="theme-a" href="/index.php?r=l&amp;cid=0&amp;s=t&amp;tmall=1">天猫</a>
	            </li>
	            <li class="">
	                <a class="theme-a" href="/index.php?r=l&amp;cid=0&amp;s=t&amp;freight=1">运费险</a>
	            </li>
	            <li class="">
	                <a class="theme-a" href="/index.php?r=l&amp;cid=0&amp;s=t&amp;amoy=1">海淘</a>
	            </li>
	            <li class="cat-lit-video ">
	                <a class="theme-a" href="/index.php?r=l&amp;cid=0&amp;s=t&amp;video=1"><span class="theme-span">视频商品</span></a>
	            </li>
	        </ul>
	    </div>

	</div>
</template>

<script>
import CouponLive from './CouponLive'

export default {
  name: 'Index',
  components: {
    'CouponLive': CouponLive,
  },
  computed:{

  },
  methods:{
  }
}
</script>

<style>
.cat-wrap {
    width: 1198px;
    border: 1px solid #eee;
    border-bottom: none;
    margin-bottom: 15px
}

.cat-wrap .cat-list {
    background: #f9f9f9;
    display: block;
    border-bottom: #eee 1px solid
}

.cat-wrap .cat-list .cat-lit-title {
    float: left;
    width: 100px;
    line-height: 50px;
    color: #999;
    text-align: center
}

.cat-wrap .cat-list ul {
    background: #fff;
    list-style: none;
    float: left;
    padding: 10px 0 10px 30px;
    line-height: 30px;
    width: 1068px
}

.cat-wrap .cat-list ul li {
    list-style: none;
    float: left;
    margin-right: 17px
}

.cat-wrap .cat-list ul li:last-child,.goods-list ul .no-right {
    margin-right: 0
}

.cat-wrap .cat-list ul li a b {
    font-family: Arial;
    font-weight: 400;
    color: #999;
    margin-left: 6px
}
.cat-wrap .cat-list ul li a, .cat-wrap .cat-list ul li a.link {
	color: #333;
}

.cat-wrap .sale-type ul li {
    margin-right: 30px
}

.cat-wrap .sale-type ul li a {
    padding-left: 18px
}

.cat-wrap .sale-type ul li i {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid #ccc;
    left: 0;
    top: 0
}

.cat-wrap .sale-type ul li.cat-lit-video span {
    text-indent: 8px;
    padding: 1px 3px 1px 12px;
    margin-left: 0;
    color: #ff6255;
    border: 1px solid #ff6255;
    border-radius: 2px;
    position: relative
}

.cat-wrap .sale-type ul li.cat-lit-video span:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 3px;
    height: 0;
    width: 0;
    border-left: 5px solid #ff6255;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 5px solid transparent
}

.cat-wrap .sale-type ul .active a i,.cat-wrap .sale-type ul li a:focus i,.cat-wrap .sale-type ul li a:hover i {
    border: 1px solid #ff6255
}

.cat-wrap .sale-type ul .active a i {
    background: url(../assets/images/index/cms_pc_img.png?v=20184103648381) -99px -80px no-repeat #ff6255
}

.cat-wrap .cat-list ul .active a,.cat-wrap .cat-list ul .active a b,.cat-wrap .cat-list ul li a:focus,.cat-wrap .cat-list ul li a:focus b,.cat-wrap .cat-list ul li a:hover,.cat-wrap .cat-list ul li a:hover b {
    color: #ff6255
}

.cat-wrap .sort-wrap {
    position: absolute;
    top: 0;
    right: 0
}

.cat-wrap .sort-wrap .sort-text {
    font-size: 12px;
    color: #666
}

.cat-wrap .sort-wrap a {
    font-size: 12px;
    color: #5fa1ca
}

.cat-wrap .sort-wrap a.active,.cat-wrap .sort-wrap a:focus,.cat-wrap .sort-wrap a:hover {
    color: red
}

.cat-wrap .sort-wrap a.margin {
    margin-left: 10px
}

.tag-wrap {
    background-color: #f9f9f9;
    height: 38px;
    margin-bottom: 20px;
    width: 1198px;
    line-height: 38px;
    position: relative;
    border: 1px solid #eee
}
</style>