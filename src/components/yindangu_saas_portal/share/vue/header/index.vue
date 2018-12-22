<template>

  <div class="ydg-header">
    <div class="menu-l">
      <img
        src="~@share/img/logo.png"
        alt=""
        class="logo"
      >
    </div>
    <ul class="ydg-first-menu">
      <li
        v-for="item in firstLevelMenu"
        :class="['yfm-item',{active:item.id == realActiveId}]"
        @mouseover="showSubmenu(item.id)"
        @mouseout="hideSubmenu()"
        @click="selectNav(item,true)"
      >
        {{item.titile}}
        <template v-if="item.id ==2">
          <transition name="ani-opacity">
            <div
              class="ydg-sub-menu"
              v-show="isShowSubmenu"
            >
              <div class="dropDownList">
                <div
                  class="dropDownListItem"
                  v-for="dropDown in newDropDownList"
                  @click="selectNav(dropDown)"
                >{{dropDown.titile}}</div>
              </div>
              <div class="groupList">
                <div
                  class="group-item"
                  v-for="group in groupList"
                >
                  <div class="group-title">{{group[0].groupTitle}}</div>
                  <ul class="gi-list">
                    <li
                      v-for="groupNav in group"
                      class="gil-item"
                      @click="selectNav(groupNav)"
                    >{{groupNav.titile}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>
        </template>
      </li>
    </ul>
    <div class="menu-r">
      <div class="menu-right">
        <div class="btn-menu">登录</div>
        <div class="btn-menu">注册</div>
      </div>
    </div>
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
    //1级菜单数据
    NavBarList: {
      type: Array,
      default: () => mockData.NavBarList
    },
    //产品分组数据
    newNavBarList: {
      type: Array,
      default: () => mockData.newNavBarList
    },
    //产品下拉数据
    newDropDownList: {
      type: Array,
      default: () => mockData.newDropDownList
    }
  },
  data() {
    return {
      isShowSubmenu: false,
      localActiveId:""
    };
  },
  computed: {
    firstLevelMenu() {
      let NavBarList = this.NavBarList;
      let val = [];
      if (NavBarList.length > 0) {
        NavBarList.forEach(item => {
          !item.pid && val.push(item);
        });
        console.log("firstLevelMenu", val);
      }
      return val;
    },
    //分组数据
    groupList() {
      let newNavBarList = this.newNavBarList;
      let val = [];
      let map = {};
      if (newNavBarList.length > 0) {
        newNavBarList.forEach(item => {
          !map[item.groupId] && (map[item.groupId] = []);
          map[item.groupId].push(item);
        });
        for (let key in map) {
          val.push(map[key]);
        }
      }
      console.log("groupList", val);
      return val;
    },
    realActiveId(){
        return this.localActiveId || this.activeId;
    }
  },
  mounted() {
    console.log();
  },
  methods: {
    selectNav(nav, isFirstMenu) {
      //  第一级菜单并且是产品tab返回
      if (isFirstMenu && nav.id == 2) {
        return false;
      }
      //产品菜单
      if(!isFirstMenu){
          this.localActiveId = "2";
      }else{
          this.localActiveId = nav.id;
      }
      alert("点击了菜单" + JSON.stringify(nav));
      //暴露事件接口给页面调用
      this.$emit("selectNav", nav);
    },
    showSubmenu(id) {
      if (id == 2) {
        this.isShowSubmenu = true;
      }
    },
    hideSubmenu() {
      this.isShowSubmenu = false;
    }
  }
};
</script>

<style lang="less" src="./theme.less" scoped=true></style>