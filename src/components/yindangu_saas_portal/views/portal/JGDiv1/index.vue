<template>
 <div class="ydg-page">
    <Layout>
        <YdgHeader :activeId="'1'" :NavBarList="NavBarList" :newNavBarList="newNavBarList" :newDropDownList="newDropDownList"></YdgHeader>
        <YdgFooter></YdgFooter>
    </Layout>
    <BackTop></BackTop>
    <RightInfo :telephone="telephone.current" @on-item="rightInfoItem"></RightInfo>
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
    components:{
        YdgHeader,
        YdgFooter,
        RightInfo
    },
    methods: {
        rightInfoItem(name){
            alert("我点击了:"+name);
        }   
    }
};
</script>
<style scoped lang="less" src="./theme.less"></style>

