<template>
  <div :class="['banner',{'isTop':isTop}]">
    <Carousel
      v-model="bannerValue"
      arrow="never"
      dots="none"
      :autoplay="this.CarouselPage.length > 1"
      loop
      v-show="!isTop"
    >
      <CarouselItem v-for="item in CarouselPage">
        <img
          v-id2url:src="item.img"
          class="carousel-bg"
        />
        <div class="main">
          <div class="mainTitle">
            <span>{{ item.subtitle }}</span>
          </div>
          <div class="subTitle">{{ item.mainTitle }}</div>
        </div>
      </CarouselItem>
    </Carousel>
    <div
      class="nav"
      v-if="navList.length"
    >
      <div
        class="nav-title"
        v-show="isTop"
      >{{navTitle}}</div>
      <div
        :class="['item', { active: item === activeTab }]"
        v-for="item in navList"
        @click="changeTab(item);"
      >
        <p>{{ item.title }}</p>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ydgCarousel",
  props: {
    CarouselPage: {
      type: Array,
      default: () => []
    },
    navList: {
      type: Array,
      default: () => []
    },
    navTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      bannerValue: 0,
      localActiveTab: null,
      isTop: false //是否固定再顶部
    };
  },
  computed: {
    activeTab() {
      return this.localActiveTab || this.navList[0] || {};
    }
  },
  created() {
    this.bindScroll();
  },
  methods: {
    changeTab(tab) {
      this.localActiveTab = tab;
      this.$emit("tabChange", tab);
    },
    bindScroll() {
      $(window).on("scroll", () => {
        console.log("submenu scroll");
        let scrollTop = $(window).scrollTop();
        if (this.isTop && scrollTop == 0) {
          this.isTop = false;
        } else if (!this.isTop && scrollTop > 400) {
          this.isTop = true;
        }
      });
    }
  }
};
</script>

<style lang="less" src="./theme.less" scoped></style>
