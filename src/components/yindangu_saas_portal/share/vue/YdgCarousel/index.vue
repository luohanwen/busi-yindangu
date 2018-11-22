<template>

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

</template>
<script>
export default {
    name: "ydgCarousel",
    props: {
        CarouselPage: {
            type: Array,
            default: () => []
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
<style lang="less">
.el-menu-ydg.el-menu.el-menu--horizontal {
    // background-color:rgba(25,29,39,.2)!important;
    padding-left: 170px;
    position: fixed;
    width: 100%;
    z-index: 6000;
    border-bottom: none;
    background-color: rgba(25, 29, 39, 0.8) !important;
    & > .el-menu-item {
        width: 110px;
        text-align: center;
        background-color: transparent !important;
        &.is-active {
            border-bottom: none;
            background-color: rgb(0, 121, 254) !important;
            color: white;
        }
    }
    & > .el-submenu {
        width: 110px;
        text-align: center;
        padding: 0 13px;
        box-sizing: border-box;
        & > .el-submenu__title {
            background-color: transparent !important;
        }
        &.is-active {
            border-bottom: none;
            background-color: rgb(0, 121, 254) !important;
            color: white;
            & > .el-submenu__title {
                border-bottom: none;
                background-color: rgb(0, 121, 254) !important;
                color: white;
                .el-submenu__icon-arrow {
                    display: none;
                }
            }
        }
    }
}
</style>

<style lang="less" src="./theme.less" scoped></style>

