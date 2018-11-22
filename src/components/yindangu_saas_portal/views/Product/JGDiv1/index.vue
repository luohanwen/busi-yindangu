<template>
    <!-- 门户网站产品 -->
     <div class="ydg-page">
        <Layout>
            <YdgHeader :activeIndex="'3'"></YdgHeader>
            <Content>
                <YdgCarousel :CarouselPage="CarouselPage"></YdgCarousel>
                <div class="ydg-container">
     
                </div>
            </Content>
            <YdgFooter></YdgFooter>
        </Layout>
        <BackTop></BackTop>
        <RightInfo></RightInfo>
    </div>
</template>
<script>
import vdk from "v3-vdk";
import entities from "./entities.js";
import YdgFooter from "@share/vue/footer/index.vue";
import YdgHeader from "@share/vue/header/index.vue";
import RightInfo from "@share/vue/rightInfo/index.vue";
import YdgCarousel from "@share/vue/YdgCarousel/index.vue";

export default {
    props: entities,
    data() {
        return {
        };
    },
    components: {
        YdgFooter,
        YdgHeader,
        RightInfo,
        YdgCarousel
    },
    methods: {

    }
};
</script>
<style scoped lang="less" src="./theme.less"></style>

