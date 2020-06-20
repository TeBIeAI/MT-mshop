<template>
    <div>
        <span class="fonts">home</span>
        <van-cell-group>
            <van-cell title="单元格" value="内容"></van-cell>
            <van-cell title="单元格" value="内容"></van-cell>

            <van-button disabled type="primary" class="btn"
                >禁用状态</van-button
            >
        </van-cell-group>
    </div>
</template>

<script>
export default {}
</script>

<style>
.btn {
    /* width: 375px;
    height: 100px;
    font-size: 18px; */
    /* width: 375px; */
    font-size: 18px;
}
.fonts {
    font-size: 14px;
}
</style>
