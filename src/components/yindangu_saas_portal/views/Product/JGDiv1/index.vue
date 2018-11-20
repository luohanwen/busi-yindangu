<template>
    <!-- 门户网站产品 -->
    <div>
        <YdgHeader></YdgHeader>
        <RightInfo></RightInfo>
    </div>
</template>
<script>
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import vdk from "v3-vdk";
import entities from "./entities.js";
import YdgHeader from "@share/vue/header/index.vue";
import RightInfo from "@share/vue/rightInfo/index.vue";
export default {
    props: entities,
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1"
        };
    },
    components: {
        YdgHeader,
        RightInfo
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style scoped lang="less" src="./theme.less"></style>

