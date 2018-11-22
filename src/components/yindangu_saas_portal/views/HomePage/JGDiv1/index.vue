<template>
    <!-- 门户网站首页 -->
    <div class="ydg-page">
        <Layout>
            <YdgHeader></YdgHeader>
            <YdgCarousel :CarouselPage="CarouselPage"></YdgCarousel>
            <Content>
                <div class="ydg-container">
                    <RollingDisplay :RollingDisplay="RollingDisplay"></RollingDisplay>
                    <div class="tip1">
                        <p class="title">用伙伴的力量让企业上云更简单</p>
                        <p class="desc">云市场联合第三方服务商，满足你业务的全方位需求</p>
                    </div>
                </div>

                <!-- 特性 -->
                <TraitTabs :TraitTabs="TraitTabs" class="ydg-traittabs"></TraitTabs>

                <div class="ydg-container">
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
import YdgCarousel from "@share/vue/YdgCarousel/index.vue";
import RollingDisplay from "@share/vue/rollingDisplay/index.vue";
import TraitTabs from "@share/vue/TraitTabs/index.vue";
import RightInfo from "@share/vue/rightInfo/index.vue";

export default {
    props: entities,
    data: function() {
        return {

        };
    },
    components: {
        YdgFooter,
        YdgHeader,
        YdgCarousel,
        RollingDisplay,
        TraitTabs,
        RightInfo
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style scoped lang="less" src="./theme.less"></style>
