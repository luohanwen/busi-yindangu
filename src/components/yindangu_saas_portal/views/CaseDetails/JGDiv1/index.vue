<template>
    <!-- 门户网站案例详情 -->
    <div class="ydg-page">
        <Layout>
            <YdgHeader :activeIndex="'3'"></YdgHeader>
            <Content>
                <div class="ydg-container">
                    <div class="detail" v-if="CaseDetails.length" v-html="CaseDetails[0].details">
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
import RightInfo from "@share/vue/rightInfo/index.vue";
export default {
    props: entities,
    data: function() {
        return {};
    },
    components: {
        YdgFooter,
        YdgHeader,
        RightInfo
    },
    methods: {}
};
</script>
<style scoped lang="less" src="./theme.less"></style>

