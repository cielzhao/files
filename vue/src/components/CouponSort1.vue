<template>
	<div class="tag-wrap main-container clearfix cat-wrap">
    <div class="fixed-wrap fl theme-a-hover-active-border-top-1">
			<li class="tag-fixed" v-for="(item, key) in sortNav" :key="key" @click="navClick(item.index);navStyle()">
				<router-link :data-index="item.index" :to="{path:'/search', query: {n:1, st:item.index,sk:item.param, q:keyWord}}">{{item.text}}</router-link>
			</li>
      <div class="sort-price-area fl" v-show="priceOptionState">
        <form class='sort-price' id="priceSort">
            <input class="min-price" id="minPrice" value="" placeholder="￥">
            <span>-</span>
            <input class="max-price" id="maxPrice" value="" placeholder="￥">
            <button @click="priceSortConfirm">确定</button>
            <button @click="priceSortClear">清除</button>
        </form>
      </div>
    </div>
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
  				'param': 1,
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
  		],
  		priceOptionState: false,
  		caParam: '',
  		keyWord: ''
  	}
  },
  mounted () {
  	this.navStyle()
  },
  methods:{
  	priceSortConfirm() {
  		let caParam = this.$route.query.ca
  		let skParam = this.$route.query.sk
  		let stParam = this.$route.query.st
  		let qParam = this.$route.query.q
  		console.log(skParam)
  		let psParam = document.getElementById('minPrice').value
  		let peParam = document.getElementById('maxPrice').value
			this.$router.push({name: 'coupon', query: {n:1, ca:caParam, sk:skParam, st:stParam, q:qParam, ps:psParam, pe:peParam}})
  	},
  	priceSortClear() {
  		let caParam = this.$route.query.ca
  		let skParam = this.$route.query.sk
  		let stParam = this.$route.query.st
  		let qParam = this.$route.query.q
  		document.getElementById('minPrice').value = ''
  		document.getElementById('maxPrice').value = ''
  		this.$router.push({name: 'coupon', query: {n:1, ca:caParam, sk:skParam, st:stParam, q:qParam, ps:0, pe:100}})
  	},
  	navClick(itemParam) {
  		//控制价格排序输入框的显示隐藏
			console.log(itemParam)
			if(itemParam === 3) {
				this.priceOptionState = true
				document.getElementById('priceSort').setAttribute('data-sk', itemParam)
			}else {
				this.priceOptionState = false
			}
  	},
  	navStyle () {
			this.caParam = this.$route.query.ca
			if(!this.caParam) {
				this.caParam = 0
			}
			let stParam = this.$route.query.st
			var cateIndex = stParam
			let cateItem = document.querySelectorAll('.tag-fixed')
			let cateLength = cateItem.length
			for(let i = 0; i < cateLength; i++) {
				cateItem[i].classList.remove("active")
			}
			cateItem[cateIndex].classList.add("active")

			window.localStorage.setItem('cataIndex', this.caParam)
			this.keyWord = window.localStorage.getItem('keyWord')
		}
	},
  watch: {
    '$route' (to, from) {
      this.navStyle()
    }
  }
}
</script>

<style>
.tag-wrap .fixed-wrap .tag-fixed {
    float: left;
}
.tag-wrap .fixed-wrap .tag-fixed a {
	display: inline-block;
	line-height: 40px;
  height: 39px;
  border-right: #eee 1px solid;
  padding: 0 10px;
  position: relative;
	color: #666;
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



