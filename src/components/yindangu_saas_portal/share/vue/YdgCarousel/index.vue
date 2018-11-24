<template>

    <!-- 轮播图banner -->
    <Carousel v-model="bannerValue" loop :class="['banner','type'+type]">
        <CarouselItem v-for="item in CarouselPage">
            <img v-id2url:src="item.img" class="carousel-bg">
            <div class="main">
                <div class="mainTitle">{{item.mainTitle}}</div>
                <div class="subTitle">{{item.subTitle}}</div>
                <div class="btn">{{item.btnTitle}}</div>
            </div>
        </CarouselItem>
    </Carousel>

</template>
<script>
export default {
    name: "ydgCarousel",
    props: {
        CarouselPage: {
            type: Array,
            default: () => []
        },
        //type 1首页的轮播样式  type 2 产品的轮播样式
        type: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            bannerValue: 0
        };
    },
    methods: {}
};
</script>

<style lang="less" src="./theme.less" scoped></style>

