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
    },
    //父组件内容发生变化
    parentContentChange: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bannerValue: 0,
      localActiveTab: null,
      isTop: false, //是否固定在顶部
      canFixTop: false //是否固定在顶部
    };
  },
  computed: {
    activeTab() {
      return this.localActiveTab || this.navList[0] || {};
    }
  },
  mounted() {
    this.bindScroll();
  },
  watch: {
    parentContentChange(val, oldValue) {
      if (val) {
        this.handleCanFixTop();
      }
    }
  },
  methods: {
    changeTab(tab) {
      this.localActiveTab = tab;
      this.handleCanFixTop();
      this.reset();
      this.$emit("tabChange", tab);
    },
    reset() {
      this.isTop = false;
      $(".el-menu-ydg").show();
      $(window).scrollTop(0);
    },
    handleCanFixTop() {
      this.$nextTick(() => {
        let winHeight = $(window).height();
        let docHeight = $(document).height();
        const diff = 500; //banner的高度
        //如果banner隐藏后 页面高度还超出窗口高度既能滚动，才可将banner隐藏并固定菜单
        this.canFixTop = !!(docHeight - winHeight > diff);
      });
    },
    bindScroll() {
      let $win = $(window);

      $(window).on("scroll", () => {
        if (this.canFixTop) {
          let scrollTop = $win.scrollTop();

          if (this.isTop && scrollTop == 0) {
            this.isTop = false;
            //   显示顶部菜单
            $(".el-menu-ydg").show();
          } else if (!this.isTop && scrollTop > 340) {
            this.isTop = true;
            //   隐藏顶部菜单
            $(".el-menu-ydg").hide();
          }
        }
      });
    }
  }
};
</script>

<style lang="less" src="./theme.less" scoped></style>
