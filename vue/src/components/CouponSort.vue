<template>
	<div class="tag-wrap main-container clearfix cat-wrap">
    <div class="fixed-wrap fl theme-a-hover-active-border-top-1">
      <a href="javascript:;" v-for="(item, key) in sortNav" :key="key" :data-index="item.index" class="tag-fixed" @click="sortBy(item.param, $event)">{{item.text}}</a>

      <div class="sort-price-area fl">
        <form action="">
            <input type="hidden" name="cid" value="0">
            <input type="hidden" name="s" value="t">
            <input type="hidden" name="r" value="l">
            <input class="min-price" name="jgqj1" value="" placeholder="￥">
            <span>-</span>
            <input class="max-price" name="jgqj2" value="" placeholder="￥">
            <button>确定</button>
            <button>清除</button>
        </form>
      </div>
    </div>
    <!--<div class="goods-pages-page clearfix" style="">
			<span class="pagebtn disabled pre-page"></span>
      <span class="page-num"><b>1</b>/666</span>
      <span class="pagebtn next-page"><a href="javascript:;"></a></span>
    </div>-->
	</div>
</template>

<script>

export default {
  name: 'Index',
  data () {
  	return {
  		sortNav: [
  			{
  				'text': '人气',
  				'param': 3,
  				'index': 0
  			},
  			{
  				'text': '最新',
  				'param': 2,
  				'index': 1
  			},
  			{
  				'text': '销量',
  				'param': 1,
  				'index': 2
  			},
  			{
  				'text': '价格',
  				'param': 0,
  				'index': 3
  			},
  		]
  	}
  },
  mounted () {
  	this.defaultStyle()
  },
  methods:{
  	sortBy (itemParam, $event) {
  		let caQuery = this.$route.query.ca
			this.$router.push({name: 'coupon', query: {n:1, ca:caQuery, sk:itemParam}})

			let cateItem = $event.target.parentNode.children
			let cateItemLength = cateItem.length
			for(let i = 0; i < cateItemLength; i++) {
				cateItem[i].classList.remove('active')
			}
			$event.target.classList.add('active')
  	},
  	defaultStyle () {
			let oNavItem = document.querySelectorAll('.tag-fixed')
			oNavItem[0].classList.add("active")
		}
  }
}
</script>

<style>
.tag-wrap .fixed-wrap .tag-fixed {
    float: left;
    line-height: 40px;
    height: 39px;
    border-right: #eee 1px solid;
    padding: 0 20px;
    color: #666;
    position: relative
}

.tag-wrap .fixed-wrap .tag-fixed:focus .icon,.tag-wrap .fixed-wrap .tag-fixed:hover .icon {
    /*background: url(/images/select_icon.png?v=20184103648381) 0 -13px no-repeat*/
}

.tag-wrap .fixed-wrap .active,.tag-wrap .fixed-wrap .tag-fixed:focus,.tag-wrap .fixed-wrap .tag-fixed:hover {
    border-top: 2px red solid;
    color: red;
    background: #fff;
    line-height: 36px;
    height: 37px
}

.tag-wrap .fixed-wrap .sort-price-area {
    width: auto;
    padding: 7px 10px;
    margin-top: 1px;
    position: relative
}

.tag-wrap .fixed-wrap .sort-price-area:hover {
    background: #fff;
    box-shadow: 0 0 6px 0 rgba(170,170,170,.3)
}

/*.tag-wrap .fixed-wrap .sort-price-area a.clear-price {
    display: none;
    position: absolute;
    right: 14px;
    top: 11px;
    height: 16px;
    line-height: 16px
}

.tag-wrap .fixed-wrap .sort-price-area:hover a.clear-price,.tag-wrap .fixed-wrap .sort-price-area:hover button {
    display: block
}

.tag-wrap .fixed-wrap .sort-price-area a:hover.clear-price {
    text-decoration: underline
}*/

.tag-wrap .fixed-wrap .sort-price-area button {
    width: 40px;
    height: 24px;
    border-radius: 4px;
    background: #ff6255;
    color: #fff;
    text-align: center;
    line-height: 24px;
    border: none;
    outline: 0;
    font-size: 12px;
    float: left;
    margin-left: 10px
}

.tag-wrap .fixed-wrap .sort-price-area:hover button:hover {
    background: #f44c3e
}

.tag-wrap .fixed-wrap .sort-price-area span {
    float: left;
    height: 24px;
    line-height: 22px;
    padding: 0 2px
}

.tag-wrap .fixed-wrap .sort-price-area input {
    width: 40px;
    height: 24px;
    padding: 4px;
    float: left;
    color: #999;
    font-family: Microsoft Yahei;
    border: 1px solid #eee;
    font-size: 12px
}

.tag-wrap .split {
    height: 25px;
    background-color: #CCC;
    width: 1px;
    float: left;
    overflow: hidden;
    margin-left: 50px;
    margin-top: 5px
}

.tag-wrap .tags {
    float: left;
    font-size: 12px;
    color: #666;
    line-height: 37px
}

.tag-wrap .tags span {
    float: left;
    margin-left: 20px
}

.tag-wrap .tags a {
    float: left;
    color: #5fa1ca;
    margin: auto 8px
}

.tag-wrap .tags .active,.tag-wrap .tags a:focus,.tag-wrap .tags a:hover {
    color: red
}
@media only screen and (max-width: 575px) {
	.tag-wrap .fixed-wrap .tag-fixed {
		padding: 0 5px;
	}
}
</style>