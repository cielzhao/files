<template>
	<div class="wrapper">
		<Header></Header>
		<Nav></Nav>
		<Banner></Banner>
		<Main></Main>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
import Banner from './Banner'
import Main from './Main'
import Footer from './Footer'

export default {
  name: 'Index',
  components: {
    'Header': Header,
    'Nav': Nav,
    'Banner': Banner,
    'Main': Main,
    'Footer': Footer,
  }
}
</script>

<style>

</style>