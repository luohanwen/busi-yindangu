<template>
  <!-- 门户网站关于我们 --> 
<div class="ydg-page">
  <Layout>
    <YdgHeader :activeId="'5'"></YdgHeader>
    <content>
      <SubMenu @tabChange="tabChange" :navList="navList" :CarouselPage="CarouselPage" navTitle="关于我们" :parentContentChange="contentChange"></SubMenu>
      <div class="subMenuContent">
        <!-- 智企云 -->
        <div class="smc home" v-show="activeTab.key === 'home'">
          <div class="ydg-container">
            <div class="intro">
              <div class="title">
                <p>{{ compantList.title }}</p><span>01</span>
              </div>
              <div class="desc" v-html="compantList.content"></div>
            </div>
          </div>
          <div class="intro-two" v-show="compantList.title">
            <div class="ydg-container">
              <div class="int-detail int-company">
                <div class="title">企业管理</div>
                <ul>
                  <li v-for="name in companySysList">{{name}}</li>
                </ul>
              </div>
              <div class="int-detail int-project">
                <div class="title">项目管理</div>
                <ul>
                  <li v-for="name in projectSysList">{{name}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="ydg-container">
            <div class="intro">
              <div class="title">
                <p>{{ ourCustomer.title }}</p><span>03</span>
              </div>
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
            <div class="info" v-if="contactUsCont.length">
              <Row :gutter="120">
                <i-Col span="8" v-for="item in contactUsCont">
                <div class="info-content">
                  <div class="title">{{item.title}}</div>
                  <p class="tel">电话：{{item.tel}}</p>
                  <p class="mail">邮箱：{{item.mail}}</p>
                </div>
                </i-Col>
              </Row>
            </div>
          </div>
          <div class="detail">
            <div class="map">
              <img src="~@share/img/about_map.png" alt>
            </div>
            <div class="address">
              <div class="content">
                <div class="title">公司地址</div>
                <p>地址：{{CompanyAddress.current.address}}</p>
                <p>电话：{{CompanyAddress.current.photo}}</p>
                <p>邮箱：{{CompanyAddress.current.mail}}</p>
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
      //企业管理系统列表
      companySysList: [
        "协同办公管理系统",
        "客户关系管理系统",
        "营销管理系统",
        "合同管理系统",
        "项目系统",
        "产品管理系统",
        "采购管理系统",
        "客户管理系统",
        "费控管理系统",
        "资金管理系统",
        "自小管理系统",
        "人力资源管理系统"
      ],
      //工程管理列表
      projectSysList: [
        "劳务管理系统",
        "物资管理系统",
        "设备管理系统",
        "成本管理系统",
        "EPC总承包管理系统",
        "施工项目智慧工地管理系统",
        "施工企业综合项目管理系统"
      ],
      activeTab: {},
      contentChange: false //内容发生变化
    };
  },
  computed: {
    compantList() {
      return (this.OurInfonation.current && this.OurInfonation.current.compantList) || {};
    },
    ourCustomer() {
      return (this.OurInfonation.current && this.OurInfonation.current.ourCustomer) || {};
    }
  },
  components: {
    YdgFooter,
    YdgHeader,
    RightInfo,
    SubMenu
  },
  mounted() {
    this.activeTab = this.navList[0];
    this.$nextTick(() => {
      setTimeout(() => {
        this.contentChange = true;
      }, 500);
    });
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

