<template>
    <div class="banner">
        <Carousel
            v-model="bannerValue"
            arrow="never"
            dots="none"
            :autoplay="this.CarouselPage.length > 1"
            loop
        >
            <CarouselItem v-for="item in CarouselPage">
                <img v-id2url:src="item.img" class="carousel-bg" />
                <div class="main">
                    <div class="mainTitle">
                        <span>{{ item.subtitle }}</span>
                    </div>
                    <div class="subTitle">{{ item.mainTitle }}</div>
                </div>
            </CarouselItem>
        </Carousel>
        <div class="nav" v-if="navList.length">
            <div
                :class="['item', { active: item === activeTab }]"
                v-for="item in navList"
                @click="changeTab(item);"
            >
                <p>{{ item.title }}</p>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ydgCarousel",
    props: {
        CarouselPage: {
            type: Array,
            default: () => []
        },
        navList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            bannerValue: 0,
            localActiveTab: null
        };
    },
    computed: {
        activeTab() {
            return this.localActiveTab || this.navList[0] || {};
        }
    },
    methods: {
        changeTab(tab) {
            this.localActiveTab = tab;
            this.$emit("tabChange", tab);
        }
    }
};
</script>

<style lang="less" src="./theme.less" scoped></style>
