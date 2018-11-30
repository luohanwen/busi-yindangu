<template>
  <!-- 门户网站关于我们 -->
  <div class="ydg-page">
    <Layout>
      <YdgHeader :activeId="'5'"></YdgHeader>
      <content>
        <SubMenu @tabChange="tabChange" :navList="navList" :CarouselPage="CarouselPage" navTitle="关于我们"></SubMenu>
        <div class="subMenuContent">
          <!-- 智企云 -->
          <div class="smc home" v-show="activeTab.key === 'home'">
            <div class="ydg-container">
              <div class="intro">
                <div class="title">{{ compantList.title }}</div>
                <div class="desc" v-html="compantList.content"></div>
              </div>
            </div>
            <div class="intro-two" v-show="compantList.title"></div>
            <div class="ydg-container">
              <div class="intro">
                <div class="title">{{ ourCustomer.title }}</div>
                <div class="desc" v-html="ourCustomer.content"></div>
              </div>
            </div>
          </div>
          <!-- 网站公告 -->
          <div class="smc notice" v-show="activeTab.key === 'notice'">
            <div class="ydg-container">
              <div class="notice-list">
                <div class="item" v-for="item in CompanyNotice">
                  <div class="time">
                    <p>{{ item.notice_time | toDay }}</p>
                    <p>
                      {{
                      item.notice_time
                      | toYearAndMonth
                      }}
                    </p>
                  </div>
                  <div class="item-r">
                    <div class="title">{{ item.notice_title }}</div>
                    <div class="notice-content" v-html="item.notice_message"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 公司动态 -->
          <div class="smc dynamic" v-show="activeTab.key === 'dynamic'">
            <div class="ydg-container">
              <div class="list">
                <div class="item" v-for="item in CompanyDynamics">
                  <div class="item-hd">
                    <img v-id2url:src="item.coverPhoto" alt>
                  </div>
                  <div class="item-b">
                    <div class="title">{{item.mainTitle}}</div>
                    <div class="time">{{item.creatTime}}</div>
                    <div class="desc">{{item.introduction | limitWord}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 联系我们 -->
          <div class="smc contact" v-show="activeTab.key === 'contact'">
            <div class="ydg-container">
              <div class="info">
                <img src="~@share/img/contact-info.png" alt>
              </div>
            </div>
            <div class="detail">
              <div class="map">
                <img src="~@share/img/about_map.png" alt>
              </div>
              <div class="address">
                <div class="content" v-if="CompanyAddress.length">
                  <div class="title">公司地址</div>
                  <p>地址：{{CompanyAddress[0].address}}</p>
                  <p>电话：{{CompanyAddress[0].photo}}</p>
                  <p>邮箱：{{CompanyAddress[0].mail}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </content>
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
import SubMenu from "@share/vue/subMenu/index.vue";
export default {
  props: entities,
  data: function() {
    return {
      navList: [
        { title: "智企云", key: "home" },
        { title: "网站公告", key: "notice" },
        { title: "公司动态", key: "dynamic" },
        // { title: "加入我们", key: "joinus" },
        // { title: "伙伴加盟", key: "partner" },
        { title: "联系我们", key: "contact" }
      ],
      activeTab: {}
    };
  },
  computed: {
    compantList() {
      return (this.OurInfonation[0] && this.OurInfonation[0].compantList) || {};
    },
    ourCustomer() {
      return (this.OurInfonation[0] && this.OurInfonation[0].ourCustomer) || {};
    }
  },
  components: {
    YdgFooter,
    YdgHeader,
    RightInfo,
    SubMenu
  },
  created() {
    this.activeTab = this.navList[0];
  },
  methods: {
    tabChange(tab) {
      this.activeTab = tab;
    }
  },
  filters: {
    toDay(time) {
      if (!time) {
        return "";
      }
      return time.split("-")[2];
    },
    toYearAndMonth(time) {
      if (!time) {
        return "";
      }
      return `${time.split("-")[0]}-${time.split("-")[1]}`;
    },
    //动态描述超出三行省略号
    limitWord(word) {
      if (!word) {
        return "";
      }
      return word.length > 100 ? word.slice(0, 100) + "..." : word;
    }
  }
};
</script>
<style scoped lang="less" src="./theme.less"></style>
