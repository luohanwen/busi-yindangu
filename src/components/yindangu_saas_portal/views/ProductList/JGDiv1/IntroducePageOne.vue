<template>
<div>
    <div class="introducePageOne" v-for="(item,index) in IntroducePageOneNew">
        <div class="ydg-container">
             <template v-if="index%2==0">
                <div class="item word">
                    <p class="title">{{item.title}}</p>
                    <p class="content">{{item.content}}</p>
                    <p class="know-more" @click="knowMore(item)">了解更多></p>
                </div>
                <div class="item img">
                    <img v-id2url:src="item.img" alt="">
                </div>
             </template>
             <template v-else>
                <div class="item img">
                    <img v-id2url:src="item.img" alt="">
                </div>
                <div class="item word">
                    <p class="title">{{item.title}}</p>
                    <p class="content">{{item.content}}</p>
                    <p class="know-more" @click="knowMore(item)">了解更多></p>
                </div>
             </template>
        </div>
    </div>
</div>
</template>
<script>
import vdk from "v3-vdk";
import entities from "./entities.js";

export default {
    props: {
        IntroducePageOneNew: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {};
    },
    methods: {
        knowMore(item){
            this.$emit("on-know-more",item);
        }
    }
};
</script>
<style scoped=true lang="less">
@import (reference) "~@share/less/var.less";
@import "~@vPlatformWebSkinVar";
@import "~@vPlatformBaseSkinVar";
.ydg-container {
    margin: 0 auto;
    width: @main-width;
    display: flex;
    align-items: center;
}

.introducePageOne{
    &:nth-child(even){
        background-color: rgb(245,246,250);
    }
    &:nth-child(odd){
        background-color: white;
    }
    overflow: hidden;
    display: flex;
    align-items: center;
    min-height: 320px;;
    padding:20px 0;
    box-sizing: border-box;
    .item{
        flex: 1;
        &.word{
            padding-right: 100px;
            padding-left: 40px;
            .title{
                color:@main-color;
                font-size: 28px;
                font-weight: bold;
            }
            .content{
                margin-top: 10px;
                color: #666666;
                font-size: 14px;
            }
            .know-more{
                margin-top: 2px;
                font-size: 14px;
                color: @v-primary-color;
                cursor: pointer;
            }
        }
        &.img{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                max-height: 100%;
            }
        }
    }
}
</style>