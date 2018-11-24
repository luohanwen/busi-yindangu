<template>
    <!-- 门户网站产品试用 -->
    <div class="ydg-page">
        <Layout>
            <YdgHeader :activeIndex="'3'"></YdgHeader>
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
                                        <Input v-model="formValidate.name"></Input>
                                    </FormItem>
                                    <FormItem label="手机号码" prop="phone">
                                        <Input v-model="formValidate.phone"></Input>
                                    </FormItem>
                                    <FormItem label="手机验证码" prop="sendcode" class="sendcode">
                                        <Row>
                                            <Col span="16"><Input v-model="formValidate.sendcode"></Input></Col>
                                            <Col span="8">
                                            <div class="btn-code">获取验证码</div>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem label="邮箱" prop="email">
                                        <Input v-model="formValidate.email"></Input>
                                    </FormItem>
                                    <FormItem label="企业名称" prop="companyname">
                                        <Input v-model="formValidate.companyname"></Input>
                                    </FormItem>
                                    <FormItem label="职位" prop="zw">
                                        <Input v-model="formValidate.zw"></Input>
                                    </FormItem>
                                    <FormItem label="申请领域" prop="apply">
                                        <Select v-model="formValidate.apply">
                                            <Option value="beijing">New York</Option>
                                            <Option value="shanghai">London</Option>
                                            <Option value="shenzhen">Sydney</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="邀请码" prop="inviteCode">
                                        <Input v-model="formValidate.inviteCode"></Input>
                                    </FormItem>
                                    <FormItem label="申请说明" prop="intro">
                                        <Input v-model="formValidate.intro" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
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
    data: function() {
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
                email: [
                    {
                        required: true,
                        message: "请输入邮箱",
                        trigger: "blur"
                    }
                ]
            }
        };
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
                    this.$Modal.success({
                        title: "温馨提示",
                        content:
                            "<div class='pop-succ'><p>申请提交成功！</p><p>请保持通话畅通，我们会尽快与你联系核实。</p></div>"
                    });
                } else {
                    this.$Message.error("提交失败!");
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
<style lang="less">
.pop-succ {
    p {
        &:nth-child(1) {
            font-size: 16px;
            font-weight: bold;
        }
    }
}
</style>

<style scoped lang="less" src="./theme.less"></style>

