<template>

<!-- 轮播图banner -->
<Carousel
  v-model="bannerValue"
  loop
  :autoplay="CarouselPage.length>1"
  :dots="CarouselPage.length>1?'inside':'none'"
  :arrow="CarouselPage.length>1?'hover':'never'"
  :class="['banner','type'+type]"
>
  <CarouselItem v-for="item in CarouselPage">
    <img
      v-id2url:src="item.img"
      class="carousel-bg"
    >
    <div class="main">
      <div class="mainTitle">{{item.mainTitle}}</div>
      <div class="subTitle">{{item.subTitle}}</div>
      <div class="btn" :data-item="JSON.stringify(item)">{{item.btnTitle}}</div>
    </div>
  </CarouselItem>
</Carousel>

</template>
<script>
export default {
  name: "ydgCarousel",
  props: {
    CarouselPage: {
      type: Array,
      default: () => []
    },
    //type 1首页的轮播样式  type 2 产品的轮播样式
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      bannerValue: 0
    };
  },
  mounted() {
      setTimeout(()=>{
            console.log("btn",$(".ivu-carousel.banner").find(".btn"));
            $(".ivu-carousel.banner").find(".btn").on("click",(event)=>{
                let $target = $(event.currentTarget || event.target);
                let item = JSON.parse($target.attr("data-item"));
                this.btnHandle(item);
            });
      },2e3);
  },
  methods: {
      btnHandle(item){
          this.$emit("on-btn",item);
      }
  }
};
</script>
<style lang="less" src="./theme.less" scoped=true></style>