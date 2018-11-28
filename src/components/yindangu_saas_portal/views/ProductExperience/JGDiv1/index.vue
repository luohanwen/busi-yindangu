<template>
  <!-- 门户网站产品试用 -->
  <div class="ydg-page">
    <Layout>
      <YdgHeader :activeIndex="'2'"></YdgHeader>
      <Content>
        <div class="bg">
          <div class="ydg-container">
            <div class="main-content">
              <div class="item-l">
                <div class="title">立即申请7天免费产品体验</div>
                <div class="desc">开箱即用，马上体验</div>
              </div>
              <div class="item-r">
                <Form
                  class="myform"
                  ref="formValidate"
                  :model="formValidate"
                  :rules="ruleValidate"
                  :label-width="90"
                >
                  <p class="tip">提交以后，客服人员会尽快与您取得联系，安排试用。</p>
                  <FormItem
                    label="姓名"
                    prop="name"
                  >
                    <Input v-model="formValidate.name"></Input>
                  </FormItem>
                  <FormItem
                    label="手机号码"
                    prop="phone"
                  >
                    <Input v-model="formValidate.phone"></Input>
                  </FormItem>
                  <FormItem
                    label="手机验证码"
                    prop="sendcode"
                    class="sendcode"
                  >
                    <Row>
                      <Col span="16"><Input v-model="formValidate.sendcode"></Input></Col>
                      <Col span="8">
                      <div
                        :class="['btn-code',{'counting':isCounting}]"
                        @click="getCode"
                      >{{codeWord}}</div>
                      </Col>
                    </Row>
                  </FormItem>
                  <FormItem
                    label="验收码"
                    prop="code"
                    class="code"
                  >
                    <Row>
                      <Col span="16"><Input v-model="formValidate.code"></Input></Col>
                      <Col span="4">
                      <img
                        src="~@share/img/code.png"
                        alt=""
                      >
                      </Col>
                      <Col span="4">
                      <span>换一张</span>
                      </Col>
                    </Row>
                  </FormItem>
                  <FormItem
                    label="邮箱"
                    prop="email"
                  >
                    <Input v-model="formValidate.email"></Input>
                  </FormItem>
                  <FormItem
                    label="企业名称"
                    prop="companyname"
                  >
                    <Input v-model="formValidate.companyname"></Input>
                  </FormItem>
                  <FormItem
                    label="公司规模"
                    prop="companysize"
                  >
                    <Select v-model="formValidate.companysize">
                      <Option value="beijing">New York</Option>
                      <Option value="shanghai">London</Option>
                      <Option value="shenzhen">Sydney</Option>
                    </Select>
                  </FormItem>
                  <FormItem
                    label="职位"
                    prop="zw"
                  >
                    <Input v-model="formValidate.zw"></Input>
                  </FormItem>
                  <FormItem
                    label="邀请码"
                    prop="inviteCode"
                  >
                    <Input v-model="formValidate.inviteCode"></Input>
                  </FormItem>
                  <FormItem>
                    <div
                      class="btn-summit"
                      @click="handleSubmit('formValidate')"
                    >提交</div>
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Content>
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
import Utils from "@share/js/utils";
export default {
  props: entities,
  data: function() {
    return {
      formValidate: {
        name: "",
        phone: "",
        sendcode: "",
        code: "",
        email: "",
        companyname: "",
        companysize: "",
        zw: "",
        inviteCode: ""
      },
      //是否倒计时验证码
      isCounting: false,
      initCountValue: 60,
      ruleValidate: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur"
          }
        ],
        sendcode: [
          {
            required: true,
            message: "请输入手机验证号码",
            trigger: "blur"
          }
        ],
        code: [
          {
            required: true,
            message: "请输入验收码",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        companyname: [
          {
            required: true,
            message: "请输入公司名称",
            trigger: "blur"
          }
        ],
        companysize: [
          {
            required: true,
            message: "请选择公司规模",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    //验证码显示文字
    codeWord() {
      if (this.isCounting) {
        return this.initCountValue;
      } else {
        return "获取验证码";
      }
    }
  },
  components: {
    YdgFooter,
    YdgHeader,
    RightInfo
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("提交失败!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    getCode() {
      if (!this.isCounting) {
        this.isCounting = true;
        Utils.countDown(this.initCountValue, value => {
          this.initCountValue = value;
          if (value === 0) {
            this.isCounting = false;
            this.initCountValue = 60;
          }
        });
      }
    }
  }
};
</script>
<style scoped lang="less" src="./theme.less"></style>

