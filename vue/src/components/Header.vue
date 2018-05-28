<template>
	<header id="header">
		<div class="header-top">
			<div class="container">
				<div class="header-top-left fl">每天千款优惠券、只为专注精选！</div>
				<ul class="header-top-right fr">
					<li><a class="set-home" href="javascript:;" title="将本站设为首页" @click="SetHome(this,myUrl)">设为首页</a></li>
					<li><a class="add-favorite" href="javascript:;" title="加入收藏，方便下次打开" @click="AddFavorite('精品女装',myUrl)">加入收藏</a></li>
					<!--<li><a class="my-service" href="javascript:;" title="联系我帮你解答">遇到购物问题? 联系我 ></a></li>-->
				</ul>
			</div>
		</div>
		<div class="header-con">
			<div class="container">
				<div class="row">
					<div class="header-con-logo col-md-2">
						<a href="javascript:;">精品女装</a>
					</div>
					<!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				    <span class="navbar-toggler-icon"></span>
				  </button>-->
					<div class="header-con-search col-md-10">
						<div id="search">
							<form>
								<input id="searchInput" class="search-input" type="text" placeholder="精品女装"  @keyup.enter="searchKey"/>
								<input class="search-btn" type="button" value="搜索" @click="searchKey" />
							</form>
						</div>
						<ul class="header-con-info fr">
							<dl><dt></dt></dl>
							<dl><dt></dt></dl>
							<dl><dt></dt></dl>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			keyWord: '',
			myUrl: ''
		}
	},
	created() {
		this.myUrl = window.location
	},
	methods: {
		searchKey() {
			this.$store.commit('cateState')
			this.keyWord = document.getElementById('searchInput').value
			if(this.keyWord != undefined && this.keyWord != '') {
				this.$router.push({name: 'search', params: {n:1, c:this.keyWord}})
			}
		},
		SetHome(obj,url){
		  try{
		    obj.style.behavior='url(#default#homepage)';
		    obj.setHomePage(url);
		  }catch(e){
		    if(window.netscape){
		     try{
		       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		     }catch(e){
		       alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
		     }
		    }else{
		    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
		    }
		  }
		},
		AddFavorite(sURL, sTitle) {
		  try {
        window.external.addFavorite(sURL, sTitle);
	    } catch (e) {
	        try {
	            window.sidebar.addPanel(sTitle, sURL, "");
	        } catch (e) {
	            alert("加入收藏失败，请使用Ctrl+D进行添加");
	        }
	    }
		}
	}
}
</script>

<style scoped>
.header-top-left {
	margin: 4px 0;
	font-size: 12px;
	color: #666;
	letter-spacing: 1px;
}
.header-top-right li {
	display: inline-block;
	margin: 4px 8px;
	font-size: 12px;
	letter-spacing: 1px;
}
.header-top-right a {
	color: #666;
}
.header-top-right a.my-service {
	color: #8da7cb;
}
.header-con-logo {
  height: 80px;
}
.header-con-logo a {
    line-height: 80px;
    font-size: 34px;
    padding-left: 20px;
    color: #ff6eb4;
}

#search {
	float: left;
	position: relative;
  margin-top: 21px;
}
#search .search-input {
	height: 33px;
  width: 70%;
  float: left;
  padding: 0 20px;
  border: 2px solid #ff6eb4;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  outline: 0;
}
#search .search-btn {
	display: inline-block;
    background-color: #ff6eb4;
    color: #fff;
    letter-spacing: 2px;
    border: 0;
    line-height: 21px;
    cursor: pointer;
    font-size: 16px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 33px;
    overflow: hidden;
    padding: 7px 23px;
    outline: 0;
}
.header-con-info dl {
	float: left;
	margin: 5px;
}
.header-con-info dl:nth-child(1) dt {
	width: 60px;
    height: 70px;
    background-image: url(../assets/images/index/baozhang.png);
    background-position: 0 1px;
}
.header-con-info dl:nth-child(2) dt {
	width: 60px;
    height: 70px;
    background-image: url(../assets/images/index/baozhang.png);
    background-position: 0 -77px;
}
.header-con-info dl:nth-child(3) dt {
	width: 60px;
    height: 70px;
    background-image: url(../assets/images/index/baozhang.png);
    background-position: 0 -151px;
}
@media only screen and (max-width: 575px) {
	.header-con-search {
		width: 100%;
		margin-bottom: 20px;
	}
}

@media only screen and (min-width: 576px) and (max-width: 1024px) {
	.header-con-logo a {
    font-size: 20px;
	}
	.header-con-info {
		display: none;
	}
}
</style>