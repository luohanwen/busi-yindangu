<template>
    <div class="rollingDisplay">
        <Row :gutter="20" class="rolling-title">
            <Col span="6">最新活动</Col>
            <Col span="6">新闻动态</Col>
            <Col span="6">最近案例</Col>
            <Col span="6">产品论道</Col>
        </Row>
        <div class="swiper-container rollingDisplay-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in RollingDisplay">
                    <Row type="flex" :gutter="20" class="rolling-content">
                        <Col span="6">{{item.active}}</Col>
                        <Col span="6">{{item.news}}</Col>
                        <Col span="6">{{item.cash}}</Col>
                        <Col span="6">{{item.product}}</Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "@share/swiper/swiper.min";
import "@share/swiper/swiper.min.css";
export default {
    props: {
        RollingDisplay: {
            type: Array,
            default: () => []
        }
    },
    name: "rollingDisplay",
    data() {
        return {};
    },
    updated() {
        console.log("updated");
        this.initSwiper();
    },
    methods: {
        initSwiper() {
            let $swiper = $(".rollingDisplay-swiper");
            let activeHight = $swiper.find(".swiper-slide").height();
            $swiper.height(activeHight);
            var mySwiper = new Swiper(".rollingDisplay-swiper", {
                autoplay: true, //可选选项，自动滑动
                direction: "vertical",
                loop: true,
                autoHeight: true
            });
        }
    }
};
</script>
<style lang="less" src="./theme.less" scoped></style>
