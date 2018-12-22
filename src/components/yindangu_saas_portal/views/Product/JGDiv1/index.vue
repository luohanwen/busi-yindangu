<template>
  <!-- 门户网站产品 -->
<div class="ydg-page">
    <Layout>
        <YdgHeader :activeId="'6'"></YdgHeader>
        <Content>
            <YdgCarousel :CarouselPage="CarouselPage" :type="2"></YdgCarousel>
            <!-- 产品介绍1 -->
            <IntroducePageOne :IntroducePageOne="IntroducePageOne"></IntroducePageOne>
            <div class="product-container">
                <!-- 产品介绍2 -->
                <IntroducePageTwo :IntroducePageTwo="IntroducePageTwo"></IntroducePageTwo>

                <!-- 使用伙伴 -->
                <div class="tip1">他们都在使用</div>
                <div class="ydg-container">
                    <Row :gutter="40" class="userpartner">
                        <i-Col span="6" v-for="item in UserPartner">
                        <img v-id2url:src="item.PartnerImg" alt="">
                        </i-Col>
                    </Row>
                </div>

                <!-- 购买产品 -->
                <div class="tip2">心动，不如马上行动</div>
                <div class="ydg-container">
                    <Row :gutter="30" class="buy-list">
                        <i-Col span="8" v-for="item in ProductPrice">
                        <div class="buy-item">
                            <div class="title">{{item.type}}</div>
                            <div class="price"><span>¥</span>
                                <div class="number">{{item.price}}</div>
                                <div class="save"><span v-if="item.savePrice">省&nbsp;¥&nbsp;{{item.savePrice}}</span><span v-if="item.monthPrice">每月&nbsp;¥&nbsp;{{item.monthPrice}}</span></div>
                            </div>

                            <div class="tip">功能</div>
                            <div class="tip-content">{{item.fuction}}</div>
                            <div class="tip">服务</div>
                            <div class="tip-content">{{item.service}}</div>
                            <div class="btn-buy">立即购买</div>
                            <div class="tag" v-if="item.isSpecial"><img src="~@share/img/product_red.png" alt=""></div>
                        </div>
                        </i-Col>
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
import YdgCarousel from "@share/vue/YdgCarousel/index.vue";
import IntroducePageOne from "./IntroducePageOne.vue";
import IntroducePageTwo from "./IntroducePageTwo.vue";

export default {
    props: entities,
    data() {
        return {};
    },
    components: {
        YdgFooter,
        YdgHeader,
        RightInfo,
        YdgCarousel,
        IntroducePageOne,
        IntroducePageTwo
    },
    methods: {}
};
</script>
<style scoped lang="less" src="./theme.less"></style>

