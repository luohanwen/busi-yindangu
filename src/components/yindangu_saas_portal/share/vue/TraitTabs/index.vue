<template>
    <div class="traitTabs">
        <div class="ydg-container">
            <div class="tabs">
                <div v-for="(tab,index) in TraitTabs" :class="['item',{'active':index === activeIndex}]" @mouseover="slideTo(index)">
                    <img v-id2url:src="tab.icon" alt="">
                    <p>{{tab.title}}</p>
                </div>
            </div>
        </div>
        <div class="tab-content">
            <div class="swiper-container traitTabs-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in TraitTabs" v-html="item.richContent">

                    </div>
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
        TraitTabs: {
            type: Array,
            default: () => []
        }
    },
    name: "traitTabs",
    data() {
        return {
            activeIndex: 0,
            mySwiper: null
        };
    },
    updated() {
        console.log("updated");
        this.initSwiper();
    },
    methods: {
        initSwiper() {
            if (!this.mySwiper) {
                let $swiper = $(".traitTabs-swiper");
                let activeHight = $swiper.find(".swiper-slide").height();
                $swiper.height(activeHight);
                this.mySwiper = new Swiper(".traitTabs-swiper", {
                    autoHeight: true
                });
            }else{
                this.mySwiper.update();
            }
        },
        slideTo(index) {
            if (this.mySwiper) {
                this.mySwiper.slideTo(index);
                this.activeIndex = index;
            }
        }
    }
};
</script>
<style lang="less" src="./theme.less" scoped></style>
