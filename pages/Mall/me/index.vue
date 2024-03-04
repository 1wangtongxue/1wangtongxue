<template>
	<view>
		<h1>个人中心页面</h1>
		<text selectable user-select>学习uniapp</text>
		<icon type="success"></icon>
		<view class="test">{{title}}</view>
		<button @click="changetext">点击</button>
		<image :src= ps class="ps-style"></image>
	</view>
</template>

<script>
	export default {
		data() { 
		// 初始化页面 相当于created
			return {
				title:"今天是腊八",
				ps:null,
			}
		},
		methods: {
			changetext(){
				this.title="要喝腊八粥"
			this.ps= this.ps==null ? "../../static/personage.jpg":null
			}
		
		},
		onUnload(){
			console.log("这是页面的onUnload");
		},
		onLoad(){
			console.log("这是页面的onLoad");
		},
		onShow(){
			console.log("这是页面的onShow");
		},
		onReady(){
			console.log("这是页面的onReady");
		},
	}
</script>

<style>
	@import url("../../../static/base.css");
.test{
	width: 750px;
	height: 100rpx;
	background-color: blanchedalmond;
}
.ps-style{
	width: 100px;
	height: 100px;
	
}
</style>
