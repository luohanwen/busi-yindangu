<template>
<div class="ydg-container">
    <div class="introducePageOne">
        <div class="item">
            <p class="title">{{IntroducePageOne.current.title}}</p>
            <p class="content">{{IntroducePageOne.current.content}}</p>
        </div>
        <div class="item">
            <img v-id2url:src="IntroducePageOne.current.img" alt="">
        </div>
    </div>
</div>
</template>
<script>
import vdk from "v3-vdk";
import entities from "./entities.js";

export default {
    props: {
        IntroducePageOne: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {};
    },
    methods: {}
};
</script>
<style scoped=true lang="less">
@import (reference) "~@share/less/var.less";
.ydg-container {
    margin: 0 auto;
    width: @main-width;
}

.introducePageOne{
    display: flex;
    align-items: center;
    .item{
        flex: 1;
        &:nth-child(1){
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
        }
        &:nth-child(2){
            img{
                width: 100%;
            }
        }
    }
}
</style>