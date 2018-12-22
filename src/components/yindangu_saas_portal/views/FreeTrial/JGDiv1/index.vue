<template>
  <!-- 门户网站产品试用 --> 
<div class="ydg-page">
  <Layout>
    <YdgHeader :activeId="'2'"></YdgHeader>
    <Content>
      <div class="bg">
        <div class="ydg-container">
          <div class="main-content">
            <div class="item-l">
              <div class="title">立即申请7天免费产品体验</div>
              <div class="desc">开箱即用，马上体验</div>
            </div>
            <div class="item-r">
              <Form class="myform" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
                <p class="tip">提交以后，客服人员会尽快与您取得联系，安排试用。</p>
                <FormItem label="姓名" prop="name">
                  <Input v-model="formValidate.name" />
                </FormItem>
                <FormItem label="手机号码" prop="phone">
                  <Input v-model="formValidate.phone" />
                </FormItem>
                <FormItem label="手机验证码" prop="sendcode" class="sendcode">
                  <Row>
                    <i-Col span="16"><Input v-model="formValidate.sendcode" /></i-Col>
                    <i-Col span="8"></i-Col>
                    <div :class="['btn-code',{'counting':isCounting}]" @click="getCode">{{codeWord}}</div>
                    
                  </Row>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                  <Input v-model="formValidate.email" />
                </FormItem>
                <FormItem label="企业名称" prop="companyname">
                  <Input v-model="formValidate.companyname" />
                </FormItem>
                <FormItem label="职位" prop="zw">
                  <Input v-model="formValidate.zw" />
                </FormItem>
                <FormItem label="申请领域" prop="apply">
                  <Select v-model="formValidate.apply">
                    <Option value="1">人力资源管理</Option>
                    <Option value="2">合同管理</Option>
                    <Option value="3">费用管控与报销</Option>
                  </Select>
                </FormItem>
                <FormItem label="邀请码" prop="inviteCode">
                  <Input v-model="formValidate.inviteCode" />
                </FormItem>
                <FormItem label="申请说明" prop="intro">
                  <Input v-model="formValidate.intro" type="textarea" :autosize="{minRows: 3,maxRows: 5}" />
                </FormItem>
                <FormItem>
                  <div class="btn-summit" @click="handleSubmit('formValidate')">提交</div>
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
  <!-- 弹窗成功 -->
  <transition name="ani-scale" :duration="{'enter':300}">
    <div class="mask" v-show="popup.succ">
        <div class="popup popup-succ">
            <Icon type="close" @click.native="hidePopup('succ')"></Icon>
            <div class="info">
                <Icon type="checkmark-circled"></Icon>
                <div class="info-r">
                    <p class="title">申请提交成功</p>
                    <p class="dec">请保持通话畅通，我们会尽快与你联系核实</p>
                </div>
            </div>
        </div>
    </div>
  </transition>
</div>
</template>
<script>
  import vdk from "v3-vdk";
import entities from "./entities.js";
import YdgFooter from "@share/vue/footer/index.vue";
import YdgHeader from "@share/vue/header/index.vue";
import RightInfo from "@share/vue/rightInfo/index.vue";
export default {
  props: entities,
  data() {
    // 验证数字
    const validateNumFunc = (rule, value, callback) => {
      if (/^[0-9]+$/.test(+value)) {
        callback();
      } else {
        callback(new Error("请输入数字值"));
      }
    };

    const validateNum = { validator: validateNumFunc, trigger: "change" };

    return {
      formValidate: {
        name: "",
        phone: "",
        sendcode: "",
        email: "",
        companyname: "",
        zw: "",
        apply: "",
        inviteCode: "",
        intro: ""
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
          },
          validateNum
        ],
        sendcode: [
          {
            required: true,
            message: "请输入手机验证号码",
            trigger: "blur"
          },
          validateNum
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ]
      },
      popup:{
          succ:false
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
    showPopup(name){
        this.popup[name] = true;
    },
    hidePopup(name){
        this.popup[name] = false;
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
            this.showPopup("succ");
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

