<template>
  <!-- 客户服务 -->
  <div class="ydg-page">
    <Layout>
      <YdgHeader :activeId="'4'"></YdgHeader>
      <content>
        <SubMenu
          @tabChange="tabChange"
          :navList="navList"
          :CarouselPage="CarouselPage"
          navTitle="客户服务"
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
                    <div class="icon">
                      <img
                        v-id2url:src="func.icon"
                        alt
                      >
                    </div>
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
                    :active-name="initAcitveCourse"
                    theme="light"
                    width="auto"
                    :open-names="[newCourseList[0].id]"
                    v-if="newCourseList.length"
                  >
                    <template v-for="course in newCourseList">
                      <Submenu
                        :name="course.id"
                        v-if="course.children && course.children.length>0"
                      >
                        <template slot="title">{{course.titile}}</template>
                        <MenuItem
                          :name="subCourse.id"
                          v-for="subCourse in course.children"
                          @click.native="selectCourse(subCourse)"
                        >{{subCourse.titile}}</MenuItem>
                      </Submenu>
                      <MenuItem
                        :name="course.id"
                        @click.native="selectCourse(course)"
                        v-else
                      >{{course.titile}}</MenuItem>
                    </template>
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
                    alt
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
                    <div class="more">更多
                      <Icon type="chevron-down"></Icon>
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
    },
    newCourseList() {
      let courseList = this.CourseList;
      if (courseList.length > 0) {
        console.log("courseList", Utils.toTree(courseList));
        return Utils.toTree(courseList);
      } else {
        return courseList;
      }
    },
    //默认教程
    initAcitveCourse() {
      let result = "";
      let list = this.newCourseList;
      if (this.newCourseList.length > 0) {
        if (list[0].children && list[0].children.length) {
          result = list[0].children[0].id;
        } else {
          result = list[0].id + "sub";
        }
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
      alert("我点击了：" + JSON.stringify(handleDoc));
    },
    //教程菜单点击
    selectCourse(course) {
      alert("我点击了：" + JSON.stringify(course));
    }
  },
  filters: {}
};
</script>
<style scoped lang="less" src="./theme.less"></style>
