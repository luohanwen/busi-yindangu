<template>
  <div>
    <!-- 绑定当前行图片 -->
	<img v-id2url:src="CarouselPage.current.img">
    shareshare
	<!-- 绑定当前行文字 -->
    <span v-text="CarouselPage.current.mainTitle"></span>
	<!-- 循环图片数组 -->
    <ul v-for="list in CashList">
        <li><img v-id2url:src="list.img"></li>
    </ul>
</div>
</template>
<script>
  import vdk from 'v3-vdk';
	import entities from './entities.js';
	export default {
		props: entities,
		data: function(){
			return {};
		},
		methods:{
			
		}
	};
</script>
<style scoped lang="less" src="./theme.less"></style>

