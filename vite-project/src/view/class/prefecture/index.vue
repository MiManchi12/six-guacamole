<template>
    <div class="nav">
        <div class="navitem">
            <span class="border">会员专区</span>
            <span>视频课</span>
            <span>直播课</span>
            <span>线下课</span>
            <span>主题</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

let num = ref(0)
</script>
<style lang="less">
//导航容器
.nav {
    width: 100%;
    height: 80px;
    border: 1px solid #eee;

    .navitem {
        width: 1000px;
        height: 80px;
        margin: 0 auto;
        text-align: center;
        line-height: 80px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 300px;

        span {
            display: inline-block;

        }

        .border {
            border-bottom: 3px solid rgb(1, 1, 1);
        }
    }
}
</style>