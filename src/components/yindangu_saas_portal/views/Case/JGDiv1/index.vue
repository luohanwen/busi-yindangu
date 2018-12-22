<template>
  <!-- 门户网站案例 -->
<div class="ydg-page">
  <Layout>
    <YdgHeader :activeId="'3'"></YdgHeader>
    <Content>
      <!-- 轮播图banner -->
      <Carousel v-model="bannerValue" loop :autoplay="CarouselPage.length>1" :dots="CarouselPage.length>1?'inside':'none'" :arrow="CarouselPage.length>1?'hover':'never'" class="banner">
        <CarouselItem v-for="item in CarouselPage">
          <img v-id2url:src="item.img" class="carousel-bg">
          <div class="main">
            <div class="title">{{item.mainTitle}}</div>
            <div class="desc">{{item.subTitle}}</div>
          </div>
        </CarouselItem>
      </Carousel>
      <Row></Row>
      <div class="ydg-container">
        <div class="case-list">
          <Row :gutter="20">
            <i-Col span="6" v-for="item in CashList">
            <div :class="['case',{'disabeld':!item.title}]">
              <img v-id2url:src="item.img" alt="">
              <div class="case-b">
                <p v-if="item.title">{{item.title | limitWord}}</p>
                <p v-else>敬请期待</p>
              </div>
            </div>
            </i-Col>
          </Row>
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
    return {
      bannerValue: 0
    };
  },
  components: {
    YdgFooter,
    YdgHeader,
    RightInfo
  },
  methods: {},
  filters: {
    //动态描述超出三行省略号
    limitWord(word) {
      if (!word) {
        return "";
      }
      return word.length > 26 ? word.slice(0, 26) + "..." : word;
    }
  }
};
</script>
<style scoped lang="less" src="./theme.less"></style>

