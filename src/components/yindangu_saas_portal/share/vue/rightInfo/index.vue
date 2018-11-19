<template>
    <div :class="['rightInfo',{'top':isTop}]">
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
        <div class="item2">
            <img src="~@share/img/icon_phone.png" alt="">
            <p>咨询</p>
        </div>
    </div>
</template>
<script>
// 右边悬浮信息
export default {
    name: "rightInfo",
    data() {
        return {
            isTop: false
        };
    },
    create() {
        this.bindScroll();
    },
    methods: {
        bindScroll() {
            let $win = $(window);
            window.addEventListener(
                "scroll",
                () => {
                    console.log("scroll");
                    let scrollTop = $win.scrollTop();
                    this.isTop = !!(scrollTop > 650);
                    console.log(scrollTop);
                },
                false
            );
        }
    }
};
</script>
<style lang="less" src="./theme.less" scoped></style>
