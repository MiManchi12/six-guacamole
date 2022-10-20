<template>

    <div>
    <div class="vipPart">          
        <el-card>
            <div class="card-header vip-header">
                <span>会员专区</span>
            </div>
            <div class="vip-topNav">
                <div class="vip-topNav-item1">
                    <div class="vip-topNav-one vip-topNav-one-border">
                        
                        <div class="vip-toNav-one-sideRight">
                            <span>登录</span>
                            <div>会员登录即享十大特权</div>
                        </div>
                    </div>
                </div>
                <div class="vip-topNav-item2">
                    <div class="vip-topNav-one ">
                        <img src="https://rs.dance365.com/teach_video_free.png" alt="">
                        <div class="vip-toNav-one-sideRight">
                            <span>以下<span style="color: red;">713</span>个会员专区课程</span>
                            <div>全部免费学习</div>
                        </div>
                    </div>
                </div>
                <div class="vip-topNav-item3">
                    <div class="vip-topNav-one">
                        <img src="https://rs.dance365.com/member_preferential.png" alt="">
                        <div class="vip-toNav-one-sideRight">
                            <span>购买非会员专区课程</span>
                            <div>可获会员立减优惠</div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
        <el-card style="margin-top: 15px">
          <div class="center-nav" ref="centerNavRef" style="position: relative;height: 200px">
              <div class="center-nav-item">
                  <span style="width: 8.33%;height: 80px;"></span>
                  <div style="width: 1100px;">
                      <el-button ></el-button>
                  </div>
              </div>
              <div style=" margin:0 auto;position: absolute;bottom: 10px;left: 50%;color: #FA3684;cursor: pointer">展开全部</div>
          </div>
      </el-card>
     
        <el-tabs type="" class="NavButton">
          <el-tab-pane label="综合排序">
          
          </el-tab-pane>
          <el-tab-pane label="销量"></el-tab-pane>
          <el-tab-pane label="浏览量"></el-tab-pane>
          <el-tab-pane label="价格"></el-tab-pane>
          <el-tab-pane label="发布时间"></el-tab-pane>
        </el-tabs>
        <div>
          <a href="">
            <img src="" alt="" style="width:124px height:125px">
          </a>
          <span>yuanchuang</span>
          <span></span>
        </div>
    </div>
</div>
    
</template>
<script lang="ts">
export default {
    name: ""
}
</script>


<style lang="less" scoped>
.vipPart {
    margin: 10px auto;
    width: 1200px;
    .vip-header {
      margin: 10px 0 10px 0
    }
  
    .vip-topNav{
      display: flex;
      .vip-topNav-item1 {
        display: flex;
        width: 1000px;
        margin: 10px 50px 10px 10px;
        border-right: #dee2e6 solid .5px;
        .vip-topNav-one {
          display: flex;
  
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
          }
  
          .vip-toNav-one-sideRight {
            font-size: 14px;
            margin-left: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            span{
              cursor: pointer
            }
            div {
              color: red;
              margin-top: 5px;
              font-size: 12px;
            }
          }
        }
      };
      .vip-topNav-item2 {
        display: flex;
        width: 1200px;
        margin: 10px 50px 10px 10px;
        .vip-topNav-one {
          display: flex;
  
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%
          }
  
          .vip-toNav-one-sideRight {
            font-size: 14px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            div {
              text-align: center;
              margin-top: 5px;
              font-size: 16px;
            }
          }
        }
      };
      .vip-topNav-item3 {
        display: flex;
        width: 1200px;
        margin: 10px 50px 10px 10px;
        .vip-topNav-one {
          display: flex;
  
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%
          }
  
          .vip-toNav-one-sideRight {
            font-size: 14px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            div {
              margin-top: 5px;
              font-size: 14px;
              text-align: center;
            }
          }
        }
      }
    }
    .center-nav{
      .center-nav-item{
        display: flex;
        margin-top: 10px;
        span{
          font-size: 14px;
          text-align: center;
          line-height: 30px;
        }
       div{
         button{
           border: 0;
           margin: 0;
         }
       }
      }
  
    }
    .content-item{
      height: 1200px;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .content-item-com{
        width: 210px;
        height: 300px;
        margin: 10px 0 10px 10px;
      }
    }
  }
  

</style>
<style>

.NavButton:hover{
  color:red;
}
</style>
