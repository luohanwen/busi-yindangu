<template>
  <!-- 客户服务 -->
  <div class="ydg-page">
    <Layout>
      <YdgHeader :activeIndex="'4'"></YdgHeader>
      <content>
        <SubMenu
          @tabChange="tabChange"
          :navList="navList"
          :CarouselPage="CarouselPage"
        ></SubMenu>
        <div class="subMenuContent">
          <!-- 服务体系介绍 -->
          <div
            class="smc intro"
            v-show="activeTab.key === 'intro'"
          >
            <div class="ydg-container">
              <div
                class="desc"
                v-if="ServiceSystemDescribe.length"
                v-html="ServiceSystemDescribe[0].RichDescribe"
              ></div>
              <div
                class="funcList"
                v-if="ServiceSystemFunction.length"
              >
                <Row :gutter="20">
                  <Col
                    span="6"
                    v-for="func in ServiceSystemFunction"
                  >
                  <div class="func">
                    <div class="title">{{func.title}}</div>
                    <div class="icon"><img
                        v-id2url:src="func.icon"
                        alt=""
                      ></div>
                    <div class="introduce">{{func.introduce}}</div>
                  </div>
                  </Col>
                </Row>
              </div>
            </div>

          </div>
          <!-- 产品标准教程 -->
          <div
            class="smc course"
            v-show="activeTab.key === 'course'"
          >
            <div class="ydg-container">
              <Layout>
                <Sider
                  hide-trigger
                  :style="{background: '#fff'}"
                  class="ydg-slide course-slide"
                >
                  <Menu
                    active-name="1-1"
                    theme="light"
                    width="auto"
                    :open-names="['1']"
                  >
                    <Submenu name="1">
                      <template slot="title">
                        快速入门
                      </template>
                      <MenuItem name="1-1">使用流程</MenuItem>
                      <MenuItem name="1-2">版本说明</MenuItem>
                      <MenuItem name="1-3">常见问题</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                      <template slot="title">
                        最佳实践
                      </template>
                      <MenuItem name="2-1">最佳实践</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                      <template slot="title">
                        用户指南
                      </template>
                      <MenuItem name="3-1">接口类型</MenuItem>
                      <MenuItem name="3-2">操作步骤</MenuItem>
                    </Submenu>
                  </Menu>
                </Sider>
                <Content
                  :style="{padding: '24px 40px 100px', minHeight: '280px', background: '#fff'}"
                  class="course-content"
                >
                  <div
                    class="course-detail"
                    v-if="tutorial_info.length"
                  >
                    <div class="title">{{tutorial_info[0].title}}</div>
                    <div class="time">更新时间：{{tutorial_info[0].updatetime}}</div>
                    <div
                      class="detail"
                      v-html="tutorial_info[0].content"
                    ></div>
                  </div>
                </Content>
              </Layout>
            </div>
          </div>
          <!-- 产品标准文档 -->
          <div
            class="smc doc"
            v-show="activeTab.key === 'doc'"
          >
            <div class="ydg-container">
              <div class="doc-list">
                <div
                  class="item"
                  v-for="doc in newDocList"
                >
                  <img
                    src="~@share/img/icon_snow.png"
                    alt=""
                    class="icon-snow"
                  >
                  <div class="item-r">
                    <div class="title">{{doc.titile}}</div>
                    <ul v-if="doc.children && doc.children.length">
                      <li
                        v-for="subDoc in doc.children"
                        @click="handleDoc(subDoc)"
                      >{{subDoc.titile}}</li>
                    </ul>
                    <div class="more">更多<Icon type="chevron-down"></Icon>
                    </div>
                  </div>
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
import Utils from "@share/js/utils";
export default {
  props: entities,
  data: function() {
    return {
      navList: [
        { title: "服务体系介绍", key: "intro" },
        { title: "产品标准教程", key: "course" },
        { title: "产品标准文档", key: "doc" }
      ],
      activeTab: {}
    };
  },
  computed: {
    newDocList() {
      let docList = this.DocList;
      if (docList.length > 0) {
        return Utils.toTree(docList);
      } else {
        return docList;
      }
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
    },
    //处理文档说明点击
    handleDoc(handleDoc) {
      console.log("我点击文档", handleDoc);
    }
  },
  filters: {}
};
</script>
<style scoped lang="less" src="./theme.less"></style>
