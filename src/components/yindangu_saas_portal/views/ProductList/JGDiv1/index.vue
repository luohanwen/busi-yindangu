<template>
<div class="ydg-page">
    <Layout>
        <YdgHeader :activeId="'6'"></YdgHeader>
        <Content>
            <YdgCarousel :CarouselPage="CarouselPage" :type="2"></YdgCarousel>
            <IntroducePageOne :IntroducePageOneNew="IntroducePageOne"></IntroducePageOne>
        </Content>
        <YdgFooter></YdgFooter>
    </Layout>
    <BackTop></BackTop>
    <RightInfo></RightInfo>
</div>
</template>
<script>
  import vdk from 'v3-vdk';
import entities from './entities.js';
import IntroducePageOne from "./IntroducePageOne.vue";
import YdgCarousel from "@share/vue/YdgCarousel/index.vue";
import YdgHeader from "@share/vue/header/index.vue";
import RightInfo from "@share/vue/rightInfo/index.vue";
import YdgFooter from "@share/vue/footer/index.vue";
export default {
	props: entities,
	data: function(){
		return {};
    },
    components:{
        IntroducePageOne,
        YdgCarousel,
        YdgHeader,
        RightInfo,
        YdgFooter
    },
	methods:{
		
	}
};
</script>
<style scoped lang="less" src="./theme.less"></style>

