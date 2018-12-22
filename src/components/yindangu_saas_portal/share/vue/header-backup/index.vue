<template>

<div>

  <el-menu
    :default-active="activeId"
    class="el-menu-ydg"
    mode="horizontal"
    text-color="#fff"
    background-color="#212433"
    active-text-color="#fff"
    v-if="newNavBarList.length"
  >

    <img
      src="~@share/img/logo.png"
      alt=""
      class="logo"
    >

    <template v-for="nav in newNavBarList">
      <el-submenu
        :index="nav.id"
        v-if="nav.children && nav.children.length>0"
      >
        <template slot="title">{{nav.titile}}</template>

        <template v-for="navSub in nav.children">
          <el-submenu
            :index="navSub.id"
            v-if="navSub.children && navSub.children.length>0"
          >
            <template slot="title">{{navSub.titile}}</template>
            <template v-for="navThree in navSub.children">
              <el-menu-item
                :index="navThree.id"
                @click.native="selectNav(navThree)"
              >{{navThree.titile}}</el-menu-item>
            </template>

          </el-submenu>
          <el-menu-item
            v-else
            :index="navSub.id"
            @click.native="selectNav(navSub)"
          >{{navSub.titile}}</el-menu-item>
        </template>

      </el-submenu>

      <el-menu-item
        v-else
        :index="nav.id"
        @click.native="selectNav(nav)"
      >{{nav.titile}}</el-menu-item>
    </template>

    <div class="menu-right">
      <div class="btn-menu">登录</div>
      <div class="btn-menu">注册</div>
    </div>
  </el-menu>
</div>

</template>
<script>
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Utils from "@share/js/utils";
import mockData from "./entities.json";
export default {
  name: "ydgHeader",
  props: {
    //传入显示的菜单id
    activeId: {
      type: String,
      default: "1"
    },
    //菜单原始数据,由于这里不知道怎么使用portal文件夹的页面框架，这里将数据默认引入，预留这个字段调用组件的时候可以传入
    NavBarList: {
      type: Array,
      default: () => mockData.NavBarList
    }
  },
  data() {
    return {};
  },
  computed: {
    newNavBarList() {
      let NavBarList = this.NavBarList;
      if (NavBarList.length > 0) {
        console.log("NavBarList", Utils.toTree(NavBarList));
        return Utils.toTree(NavBarList);
      } else {
        return NavBarList;
      }
    }
  },
  mounted() {
    console.log();
  },
  methods: {
    selectNav(nav) {
      alert("点击了菜单" + JSON.stringify(nav));

      //暴露事件接口给页面调用
      this.$emit("selectNav",nav);
    }
  }
};
</script>
<style lang="less">
.el-menu-ydg.el-menu.el-menu--horizontal {
  // background-color:rgba(25,29,39,.2)!important;
  padding-left: 170px;
  position: fixed;
  width: 100%;
  z-index: 6000;
  border-bottom: none;
  background-color: rgba(25, 29, 39, 0.8) !important;
  & > .el-menu-item {
    width: 110px;
    text-align: center;
    background-color: transparent !important;
    &.is-active {
      border-bottom: none;
      background-color: rgb(0, 121, 254) !important;
      color: white;
    }
  }
  & > .el-submenu {
    width: 110px;
    text-align: center;
    padding: 0 13px;
    box-sizing: border-box;
    & > .el-submenu__title {
      background-color: transparent !important;
    }
    &.is-active {
      border-bottom: none;
      background-color: rgb(0, 121, 254) !important;
      color: white;
      & > .el-submenu__title {
        border-bottom: none;
        background-color: rgb(0, 121, 254) !important;
        color: white;
        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }
  }
}
</style>
<style lang="less" src="./theme.less" scoped=true></style>