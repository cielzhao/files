<template>
	<div class="wrapper">
		<Header></Header>
		<Nav></Nav>
		<DetailMain></DetailMain>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from './Header'
import Nav from './Nav'
import DetailMain from './DetailMain'
import Footer from './Footer'

export default {
  name: 'Detail',
  components: {
    'Header': Header,
    'Nav': Nav,
    'DetailMain': DetailMain,
    'Footer': Footer,
  }
}
</script>

<style>

</style>