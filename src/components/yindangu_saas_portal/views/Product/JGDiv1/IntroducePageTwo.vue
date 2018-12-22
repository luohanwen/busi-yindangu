<template>
<div class="ydg-container" v-if="IntroducePageTwo.length">
    <div class="tabs">
        <div :class="['item',{active:tab === activeTab}]" v-for="tab in IntroducePageTwo" @click="changeTab(tab)"><span>{{tab.tabsName}}</span></div>
    </div>
    <div class="tab-content">
        {{activeTab.tabsContent}}
    </div>
</div>
</template>
<script>
import vdk from "v3-vdk";
import entities from "./entities.js";

export default {
    props: {
        IntroducePageTwo: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            localActiveTab: null
        };
    },
    computed: {
        activeTab() {
            return this.localActiveTab || this.IntroducePageTwo[0];
        }
    },
    methods: {
        changeTab(tab) {
            this.localActiveTab = tab;
        }
    }
};
</script>
<style scoped=true lang="less">
@import (reference) "~@share/less/var.less";
.ydg-container {
    margin: 0 auto;
    width: @main-width;
}
.tabs {
    display: flex;
    .item {
        cursor: pointer;
        flex: 1;
        color: #707eba;
        font-size: 28px;
        margin-bottom: 34px;
        &.active {
            color: white;
        }
        &:first-child {
            text-align: right;
            span {
                margin-right: 100px;
            }
        }
        &:last-child {
            text-align: left;
            span {
                margin-left: 100px;
            }
        }
    }
}
.tab-content {
    color: white;
    font-size: 24px;
}
</style>