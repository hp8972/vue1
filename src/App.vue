<template>
  <div id="app">
      <mt-header fixed :title="str" @click.native="tap">
          <router-link to="/" slot="left">
              <mt-button icon="back" v-if="true">返回</mt-button>
          </router-link>
      </mt-header>

      <transition  enenter-active-class="animated  bounceInRight"
                   leave-active-class="animated   bounceOutLeft">
          <router-view></router-view>
      </transition>
      <mt-tabbar v-model="selected" fixed="true" id="footer">

          <mt-tab-item id="font" class="f_f">
              <router-link to="/" class="color">
              <i class="iconfont icon-jingdian"></i><br/>
             推荐
                 </router-link>
            </mt-tab-item>
          <mt-tab-item id="订单" class="f_f">
          <router-link to="/mudidi" class="color">
              <i class="iconfont icon-_xinxilan"></i><br/>
              <span>目的地</span>
          </router-link>
            </mt-tab-item>


          <mt-tab-item id="商城" class="f_f">
              <router-link to="/shop" class="color">
              <i class="iconfont icon-mg-europe"></i><br/>
            <span>旅行商城</span>
              </router-link>

          </mt-tab-item>

          <mt-tab-item id="社区" class="f_f">
              <router-link to="/shequ" class="color">
              <i class="iconfont icon-youjigonglve"></i><br/>
               <span>社区</span>
              </router-link>
            </mt-tab-item>
          <mt-tab-item id="你的" class="f_f">
              <router-link to="/com" class="color">
              <i class="iconfont icon-gangaotai"></i><br/>
              <span> 我的</span>
          </router-link>
            </mt-tab-item>

      </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好',
        selected:"",
        str:"穷游"
    }
  },
    methods:{
      tab:function () {
          this.$route.go(-1)
      }
    },
    mounted(){
        $("#footer .f_f").eq(0).css({"color":"white","background":"#11bf78"})
      $("#footer .f_f").on("tap",function () {
          var index=$(this).index()
          if (index==1){
              this.str="目的地"
          }
          $(this).css({"color":"white","background":"#11bf78"})
          $("#footer .color").eq(index).css("color","white")
          $("#footer .color").not( $("#footer .color").eq(index)).css("color","black")
          $(this).siblings().css({"color":"black","background":"white"})
      })
    }
}
</script>

<style>
    .img {
        width: 6.4rem;
            height: 3.2rem;
        background: #000;
    }
    .selected{
        position: fixed;
        bottom: 0;
        background: #C0C0C0;
        z-index: 100;
    }

    #footer{
        height:60px;
        line-height: 30px;
    }
    #footer i{
        color: #000;
        font-size: 30px;
        margin-bottom: 20px;
    }

    .mint-tab-item-label {
        width: 100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
      flex-direction: column;
        font-size: 16px;

    }
#font{
    background:#11bf78 ;
    color: #ffffff;
}
    .mint-header{
        background:#11bf78 ;
    }
</style>
