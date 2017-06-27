<template>
    <div id="header">
        <mt-header title="香港" fixed id="head">
            <router-link to="" slot="left">
                <mt-button  icon="back"  @click="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div id="mint-n" v-model="selected" style="">
           <router-link class="tab" to="/swiper">攻略</router-link>
            <router-link class="tab" to="/Hpfree">商城</router-link>
            <router-link class="tab" to="/hotel">酒店</router-link>
            <router-link class="tab" to="/swiper">收藏</router-link>
            <div id="line" style="width: 25%;height: 2px;background: #ffffff;transition:0.5s"></div>
        </div>
        <transition  enenter-active-class="animated  bounceInRight"
                     leave-active-class="animated   bounceOutLeft">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import swiper from "./swiper.vue"
    export default {
        name: 'header',
        data () {
            return {
                topStatus: '',
                selected:"",
                bottomText:"",
                tt:"",
                ss:"",
                title:"香港锦囊"
            }
        },
        methods:{
            back:function () {
                this.$router.go(-1)
            }
        },
        mounted(){
            $("#mint-n a").on("tap",function () {
                var index=$(this).index()
              $("#line").css({"left":index*93.75+"px","transition":"0.4s"})
            })
            var mySwiper = new Swiper('.swiper-container',{
                direction: 'horizontal', loop: true,
                pagination: '.swiper-pagination',

            })
        }

    }
</script>

<style>
    #head{
        background: #11bf78;
    }
    .mint-header{
        background: #11bf78;
        font-size: 12px;
        color: white;
    }
 .img{
     width: 100vw;
     height:100%;
 }
   .mint-navbar{
       background: #11bf78;
       position: relative;
   }
    #mint-n{

        background: #11bf78;
        height:50px;
        width: 100vw;
        display: flex;
        flex-direction: row;
        position: fixed;
        top: 40px;
        z-index: 999;
    }
    #mint-n a{
        text-decoration: none;
        font-size: 16px;
        color:#ffffff;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tab{
        border-bottom: 1px solid #ffffff;
    }
    #line{
        position: absolute;
        top:47px;
    }


</style>
