<template>
    <!-- 门户网站案例 -->
    <div class="ydg-page">
        <Layout>
            <YdgHeader :activeId="'3'"></YdgHeader>
            <Content>
                <!-- 轮播图banner -->
                <Carousel v-model="bannerValue" loop class="banner">
                    <CarouselItem v-for="item in CarouselPage">
                        <img v-id2url:src="item.img" class="carousel-bg">
                        <div class="main">
                            <div class="title">{{item.mainTitle}}</div>
                            <div class="desc">{{item.subTitle}}</div>
                        </div>
                    </CarouselItem>
                </Carousel>
                <Row></Row>
                <div class="ydg-container">
                    <div class="case-list">
                        <Row :gutter="20">
                            <Col span="6" v-for="item in CashList">
                            <div class="case">
                                <img v-id2url:src="item.img" alt="">
                                <div class="case-b">
                                    <p>{{item.title}}</p>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </div>
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
export default {
    props: entities,
    data: function() {
        return {
            bannerValue: 0
        };
    },
    components: {
        YdgFooter,
        YdgHeader,
        RightInfo
    },
    methods: {}
};
</script>
<style scoped lang="less" src="./theme.less"></style>

