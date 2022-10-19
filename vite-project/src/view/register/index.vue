<template>
    <div class="register-container">
        <!-- 注册 -->
        <div class="register">
            <h3>
                注册新用户
                <span class="go">我有账号，去<router-link to="/login">登陆</router-link></span>
            </h3>
            <!-- 手机号码 -->
            <div class="content">
                <label>手机号：</label>
                <input type="text" placeholder="请输入你的手机号">
            </div>
            <!-- 验证码 -->
            <div class="content">
                <label>验证码：</label>
                <input type="text" placeholder="请输入验证码">
                <button style="height: 38px; width: 100px; margin-left: 5px" @click="getCode">
                    获取验证码
                </button>
            </div>
            <!-- 登录密码 -->
            <div class="content">
                <label>登录密码：</label>
                <input type="text" placeholder="请输入你的密码">
            </div>
            <!-- 确认密码 -->
            <div class="content">
                <label>确认密码：</label>
                <input type="text" placeholder="请确认你的密码">
            </div>
            <!-- 协议同意 -->
            <div class="controls">
                <input type="checkbox" />
                <span>同意协议并注册</span>
            </div>
            <div class="btn">
                <button>
                    <router-link to="/login">完成注册</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.register-container {
    .register {
        width: 1200px;
        height: 445px;
        border: 1px solid #eee;
        margin: 0 auto;

        h3 {
            background: #ececec;
            margin: 0;
            padding: 6px 15px;
            color: #333;
            border-bottom: 1px solid #dfdfdf;
            font-size: 20px;
            line-height: 30px;

            span {
                font-size: 14px;
                float: right
            }
        }
    }

    div:nth-of-type(1) {
        margin-top: 40px;
    }

    .content {
        padding-left: 390px;
        margin-bottom: 20px;
        position: relative;

        label {
            font-size: 14px;
            width: 96px;
            text-align: right;
            display: inline-block;
        }

        input {
            width: 270px;
            height: 38px;
            padding-left: 8px;
            box-sizing: border-box;
            margin-left: 5px;
            outline: none;
            border: 1px solid #999;
            border-radius: 5px;
        }

    }

    .controls {
        input {
            margin-left: 490px;
        }
    }

    .btn {
        line-height: 36px;
        margin: 17px 0 0 490px;

        button {
            width: 270px;
            height: 36px;
            background: #e1251b;
            color: #fff !important;
            display: inline-block;
            font-size: 16px;
            border-radius: 5px;
        }
    }
}
</style>