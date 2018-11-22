<template>

    <div>
        <el-menu :default-active="activeIndex" class="el-menu-ydg" mode="horizontal" @select="handleSelect" text-color="#fff" background-color="#212433" active-text-color="#fff">

            <img src="~@share/img/logo.png" alt="" class="logo">

            <el-menu-item index="1">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">产品</template>
                <el-menu-item index="2-1">产品概述</el-menu-item>
                <el-menu-item index="2-2">免费试用</el-menu-item>
                <el-submenu index="2-3">
                    <template slot="title">产品体验</template>
                    <el-menu-item index="2-3-1">HR管理</el-menu-item>
                    <el-menu-item index="2-3-2">报销管理</el-menu-item>
                    <el-menu-item index="2-3-3">合同管理</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">案例</el-menu-item>
            <el-menu-item index="4">客户服务</el-menu-item>
            <el-menu-item index="5">关于我们</el-menu-item>

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
import mockData from "./entities.json";
export default {
    name: "ydgHeader",
    props: {
        activeIndex: {
            type: String,
            default: "1"
        }
    },
    data() {
        return {
            NavBarList: mockData.NavBarList,
            userInfo: mockData.userInfo
        };
    },
    mounted() {
        console.log();
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
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

<style lang="less" src="./theme.less" scoped></style>

