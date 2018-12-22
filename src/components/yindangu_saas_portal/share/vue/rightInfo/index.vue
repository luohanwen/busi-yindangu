<template>
<div class="rightInfo">
  <div class="item">
    <p>产品</p>
    <p>体验</p>
  </div>
  <div class="item">
    <p>免费</p>
    <p>试用</p>
  </div>
  <div class="item2">
    <p>伙伴</p>
    <p>加盟</p>
  </div>
  <div
    class="item2"
    @mouseover="togglePopup(true)"
    @mouseout="togglePopup(false)"
  >
    <img
      src="~@share/img/icon_phone.png"
      alt=""
    >
    <p>咨询</p>
  </div>

  <div
    class="popup"
    v-show="showPupop"
  >
    <p class="title">电话咨询</p>
    <div class="list">
      <div class="row"><img
          src="~@share/img/menu_icon_3.png"
          alt=""
        >客服电话：0756-1234567</div class="item">
      <div class="row"><img
          src="~@share/img/menu_icon_4.png"
          alt=""
        >售前咨询：0756-1234567</div class="item">
      <div class="row"><img
          src="~@share/img/menu_icon_5.png"
          alt=""
        >售后咨询：0756-1234567</div class="item">
    </div>
  </div>
</div>
</template>
<script>
// 右边悬浮信息
export default {
  name: "rightInfo",
  data() {
    return {
      isTop: false,
      showPupop: false
    };
  },
  created() {
  },
  methods: {
    togglePopup(showPupop) {
      this.showPupop = showPupop;
    }
  }
};
</script>
<style lang="less" scoped=true>
@import (reference) "~@share/less/var";

.rightInfo {
  width: 46px;
  font-size: 14px;
  text-align: center;
  position: fixed;
  right: 10px;
  top: 60%;
  line-height: 1.4;
  z-index: 1000;
  .item {
    width: 100%;
    height: 46px;
    background-color: rgb(0, 121, 254);
    color: white;
    padding-top: 5px;
    box-sizing: border-box;
    margin-bottom: 4px;
    cursor: pointer;
  }
  .item2 {
    padding-top: 5px;
    width: 100%;
    height: 46px;
    background-color: white;
    color: #333333;
    margin-bottom: 4px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .popup {
    position: absolute;
    bottom: 4px;
    right: 60px;
    z-index: 100;
    background-color: white;
    padding: 30px 60px 30px 45px;
    width: 300px;
    box-sizing: border-box;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    .title {
      font-size: 24px;
      text-align: left;
    }
    .list {
      margin-top: 20px;
      .row {
        margin-top: 15px;
        font-size: 14px;
        color: rgb(102, 102, 102);
        img {
          margin-right: 8px;
          vertical-align: middle;
        }
      }
    }
  }
}

.top {
  position: fixed;
  top: 100px;
}
</style>