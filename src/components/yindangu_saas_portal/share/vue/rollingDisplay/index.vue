<template>
<div class="rollingDisplay">
  <Row
    :gutter="20"
    class="rolling-title"
  >
    <Col span="6">最新活动</Col>
    <Col span="6">新闻动态</Col>
    <Col span="6">最近案例</Col>
    <Col span="6">产品论道</Col>
  </Row>

  <Row
    type="flex"
    :gutter="20"
    class="rolling-content"
  >
    <Col span="6">
    <div class="swiper-container rollingDisplay-swiper-active">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in RollingDisplay"
        >
          <a
            href=""
            target="_blank"
          >{{item.active | limitWord}}</a>
        </div>
      </div>
    </div>
    </Col>
    <Col span="6">
    <div class="swiper-container rollingDisplay-swiper-news">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in RollingDisplay"
        >
          <a
            href=""
            target="_blank"
          >{{item.news | limitWord}}</a>
        </div>
      </div>
    </div>
    </Col>
    <Col span="6">
    <div class="swiper-container rollingDisplay-swiper-cash">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in RollingDisplay"
        >
          <a
            href=""
            target="_blank"
          >{{item.cash | limitWord}}</a>
        </div>
      </div>
    </div>
    </Col>
    <Col span="6">
    <div class="swiper-container rollingDisplay-swiper-product">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in RollingDisplay"
        >
          <a
            href=""
            target="_blank"
          >{{item.product | limitWord}}</a>
        </div>
      </div>
    </div>
    </Col>
  </Row>

</div>
</template>
<script>
import Swiper from "@share/swiper/swiper.min";
import "@share/swiper/swiper.min.css";
export default {
  props: {
    RollingDisplay: {
      type: Array,
      default: () => []
    }
  },
  name: "rollingDisplay",
  data() {
    return {};
  },
  updated() {
    console.log("updated");
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      let options = {
        direction: "vertical",
        loop: true,
        autoHeight: true,
        autoplay: { delay: 2000 }
      };
      this.initSwiperWithParams("rollingDisplay-swiper-active", options);
      setTimeout(() => {
        this.initSwiperWithParams("rollingDisplay-swiper-news", options);
      }, 100);
      setTimeout(() => {
        this.initSwiperWithParams("rollingDisplay-swiper-cash", options);
      }, 200);
      setTimeout(() => {
        this.initSwiperWithParams("rollingDisplay-swiper-product", options);
      }, 300);
    },
    initSwiperWithParams(swiperClassName, options) {
      let $swiper = $(`.${swiperClassName}`);
      let activeHight = $swiper.find(".swiper-slide").height();
      $swiper.height(activeHight);
      var mySwiper = new Swiper(`.${swiperClassName}`, options);
    }
  },
  filters: {
    //动态描述超出三行省略号
    limitWord(word) {
      if (!word) {
        return "";
      }
      return word.length > 36 ? word.slice(0, 36) + "..." : word;
    }
  }
};
</script>
<style lang="less" src="./theme.less" scoped=true></style>