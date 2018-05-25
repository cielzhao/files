<template>
	<div>
		<h3>我是子组件</h3>
		<ol>
			<li v-for="(item,key) in todo" :key="key">{{ item.text }}</li>
		</ol>
	</div>
</template>

<script>
	export default{
		name: 'TodoItem',
		props: ['todo']
	}
</script>

<style>
</style>