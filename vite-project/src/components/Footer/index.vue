<template>
    <!-- 底部 -->
    <div class="footerContainer">
        <div class="footerContent">
            <!-- 底部导航 -->
            <ul class="business_info">
                <li><a href="">关于我们</a></li>
                <li><a href="">用户隐私权政策</a></li>
                <li><a href="">用户服务协议</a></li>
                <li><a href="">联系我们</a></li>
            </ul>
            <!-- 联系方式 -->
            <div class="contact_info">
                <el-tooltip effect="light" placement="top">
                    <template #content> 
                        <div class="moreWechat" style="padding: 0px 10px;">
                            <h2>微信公众号</h2>
                            <p class="info" style="color:#111111;">扫描下方二维码关注我们的微信公众号，随时随地获取最新资讯</p>
                            <div class="multiple_wechat" style="display:flex">
                                <dl>
                                    <dt><img src="../../assets/images/weixin1.jpg" alt="中舞网" title="中舞网" width="74" height="74"></dt>
                                    <dd>中舞网</dd>
                                </dl>
                                <dl style="margin-left:5px">
                                    <dt><img src="../../assets/images/weixin2.png" alt="平台卖家服务号" title="平台卖家服务号" width="74" height="74"></dt>
                                    <dd>中舞网</dd>
                                </dl>
                            </div>
                        </div>
                    </template>
                    <div class="wechat"></div>
                </el-tooltip>
                <el-tooltip placement="top">
                    <div class="phone"></div>
                </el-tooltip>
            </div>
            <!-- 备案 -->
            <div class="copy_right">
                <p class="info">Copyright © 2010-2022 南京爱一格网络科技有限公司 版权所有</p>
                <p class="info">
                    经营性许可证编号：
                    <a href="" target="_blank" rel="noopener" class="info">苏B2-20180515</a>&nbsp;&nbsp;
                    <a href="" target="_blank" rel="noopener" class="info">
                        <img src="../../assets/images/jinying.png"
                            style="width: 20px; height: 20px; position: relative; top: 5px;">苏网文〔2021〕4647-106号
                    </a>
                </p>
                <a href="" target="_blank" rel="noopener" class="info">苏ICP备20036081号</a>
                <div style="display: flex; justify-content: center; align-items: center;margin-top: 8px;">
                    <a target="_blank" href="" class="info">
                        <img src="../../assets/images/gongan.png">苏公网安备 32010602010735号
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.footerContainer {
    text-align: center;
    background-color: #221f23;
    color: #b1b5c1;
    font-size: 14px;
    min-width: 1200px;
}

.footerContent {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding: 24px 40px 18px;
    color: #b1b5c1;
}

.business_info {
    margin: 0 auto;
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-around;

    li {
        a {
            color: #b1b5c1;
        }

        width: calc(25% - 4px);
    }

    :not(:last-child) {
        border-right: 1px solid #eaecf0;
    }
}

.contact_info {
    display: flex;
    justify-content: space-between;
    width: 130px;
    margin: 28px auto 30px
}

.contact_info .wechat {
    width: 26px;
    height: 24px;
    background: url(../../assets/images/weChat_normal.a1769059.svg) no-repeat;
    background-size: 100% 100%;
}

.contact_info .phone {
    width: 26px;
    height: 24px;
    background: url(../../assets/images/phone_normal.86835eeb.svg) no-repeat;
    background-size: 100% 100%;
}
.info {
    line-height: 12px;
    color: #b1b5c1;
}
.copy_right {
    text-align: center;
    background-color: #221f23;
    color: #b1b5c1;
    font-size: 14px;
}

.copy_right .info {
    line-height: 12px;
    color: #b1b5c1;
}
</style>