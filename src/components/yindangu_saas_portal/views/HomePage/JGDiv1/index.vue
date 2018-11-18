<template>
    <!-- 门户网站首页 -->
    <div class="ydg-page">
        <Layout>
            <YdgHeader></YdgHeader>
            <!-- 轮播图banner -->
            <Carousel v-model="bannerValue" loop class="banner">
                <CarouselItem v-for="item in CarouselPage">
                    <img v-id2url:src="item.img" class="carousel-bg">
                    <div class="main">
                        <div class="mainTitle">{{item.mainTitle}}</div>
                        <div class="subTitle">{{item.subTitle}}</div>
                        <div class="btn">{{item.btnTitle}}</div>
                    </div>
                </CarouselItem>
            </Carousel>
            <Content class="ydg-content">
                <div class="rollingDisplay">
                    <Row :gutter="20" class="rolling-title">
                        <Col span="6">最新活动</Col>
                        <Col span="6">新闻动态</Col>
                        <Col span="6">最近案例</Col>
                        <Col span="6">产品论道</Col>
                    </Row>
                    <Carousel loop autoplay dots="none" arrow="never" autoplaySpeed=8000>
                        <CarouselItem v-for="item in RollingDisplay">
                            <Row :gutter="20" class="rolling-content">
                                <Col span="6">{{item.active}}</Col>
                                <Col span="6">{{item.news}}</Col>
                                <Col span="6">{{item.cash}}</Col>
                                <Col span="6">{{item.product}}</Col>
                            </Row>
                        </CarouselItem>
                    </Carousel>
                </div>
                <div class="tip1">
                    <p class="title">用伙伴的力量让企业上云更简单</p>
                    <p class="desc">云市场联合第三方服务商，满足你业务的全方位需求</p>
                </div>

                <!-- 合作伙伴 -->
                <div class="tip2">
                    <p>携手共赢，与全球合作伙伴共建云端生态</p>
                </div>
                <div class="cooperativePartner">
                    <Row :gutter="40">
                        <Col span="6" v-for="partner in CooperativePartner">
                        <img v-id2url:src="partner.PartnerImg" alt="">
                        </Col>
                    </Row>
                </div>
            </Content>
            <YdgFooter></YdgFooter>
        </Layout>
        <BackTop></BackTop>
    </div>
</template>
<script>
import vdk from "v3-vdk";
import entities from "./entities.js";
import YdgFooter from "@share/vue/footer/index.vue";
import YdgHeader from "@share/vue/header/index.vue";

export default {
    props: entities,
    data: function() {
        return {
            bannerValue: 0
        };
    },
    components: {
        YdgFooter,
        YdgHeader
    },
    created() {
        console.log("home created", this.RollingDisplay);
    },
    methods: {
        show: function() {
            this.visible = true;
        }
    }
};
</script>
<style scoped lang="less" src="./theme.less"></style>
