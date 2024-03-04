<template>
	<view class="content">
		<serch></serch>
	</view>
</template>

<script>
	import serch from "../../compontes/serch/index.vue"
	export default {
		components:{//注册组件
			serch ,// 搜索
			},  
		data() {
			return {
				title: 'Hellouniapp'
			}
		},
		
		onLoad() {

		},
		methods: {

		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
