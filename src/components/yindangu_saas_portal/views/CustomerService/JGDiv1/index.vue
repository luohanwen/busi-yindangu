<template>
    <!-- 客户服务 -->
    <div class="ydg-page">
        <Layout>
            <YdgHeader :activeIndex="'4'"></YdgHeader>
            <content>
                <SubMenu @tabChange="tabChange" :navList="navList" :CarouselPage="CarouselPage"></SubMenu>
                <div class="subMenuContent">
                    <!-- 服务体系介绍 -->
                    <div class="smc intro" v-show="activeTab.key === 'intro'">
                        <div class="ydg-container">
                            <div class="desc" v-if="ServiceSystemDescribe.length" v-html="ServiceSystemDescribe[0].RichDescribe"></div>
                            <div class="funcList" v-if="ServiceSystemFunction.length">
                                <Row :gutter="20">
                                    <Col span="6" v-for="func in ServiceSystemFunction">
                                    <div class="func">
                                        <div class="title">{{func.title}}</div>
                                        <div class="icon"><img v-id2url:src="func.icon" alt=""></div>
                                        <div class="introduce">{{func.introduce}}</div>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </div>
                    <!-- 产品标准教程 -->
                    <div class="smc course" v-show="activeTab.key === 'course'">
                        产品标准教程
                    </div>
                    <!-- 产品标准文档 -->
                    <div class="smc doc" v-show="activeTab.key === 'doc'">
                        产品标准文档
                    </div>
                </div>
            </content>
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
import SubMenu from "@share/vue/subMenu/index.vue";
export default {
    props: entities,
    data: function() {
        return {
            navList: [
                { title: "服务体系介绍", key: "intro" },
                { title: "产品标准教程", key: "course" },
                { title: "产品标准文档", key: "doc" }
            ],
            activeTab: {}
        };
    },
    computed: {},
    components: {
        YdgFooter,
        YdgHeader,
        RightInfo,
        SubMenu
    },
    created() {
        this.activeTab = this.navList[0];
    },
    methods: {
        tabChange(tab) {
            this.activeTab = tab;
        }
    },
    filters: {}
};
</script>
<style scoped lang="less" src="./theme.less"></style>
