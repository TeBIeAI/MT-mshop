<template>
    <van-tabbar v-model="active">
        <van-tabbar-item replace to="/msite">
            <svg-icon iconClass="msite" class="icon iconLeft"></svg-icon>
            <div class="tab-title">首页</div>
        </van-tabbar-item>
        <van-tabbar-item replace to="/find">
            <svg-icon iconClass="find" class="icon iconLeft"></svg-icon>
            <div class="tab-title">发现</div>
        </van-tabbar-item>
        <van-tabbar-item replace to="/order">
            <svg-icon iconClass="order" class="icon iconLeft"></svg-icon>
            <div class="tab-title">订单</div>
        </van-tabbar-item>
        <van-tabbar-item replace to="/my">
            <svg-icon iconClass="my" class="icon iconLeft"></svg-icon>
            <div class="tab-title">我的</div>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    }
}
</script>

<style scoped>
.van-tabbar {
    padding: 0.2rem 0 !important;
    height: auto;
}
.iconLeft {
}
.tab-title {
    font-size: 0.6rem;
}
.van-tabbar-item--active div {
    color: red;
}
.van-tabbar-item--active svg {
    color: red;
}
</style>
