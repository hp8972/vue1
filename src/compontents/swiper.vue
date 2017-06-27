<template xmlns="http://www.w3.org/1999/html">
    <div id="swiper">
        <mt-loadmore id="load" :top-method="loadTop" ref="loadmore" @top-status-change="handleTopChange"  :topDropText="bottomText"
                     :topPullText="tt" :topLoadingText="ss">
            <mt-swipe :auto="4000" style="width: 100vw;height:5.2rem;" id="swipe">
                <mt-swipe-item ><img class="img" src="../assets/01.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item ><img class="img" src="../assets/02.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
            <div id="search">搜索目的地</div>
            <div id="title">
                <span style="margin-left: 10px">{{title}}</span>
                <span style="float:right;margin-right: 10px">全部6本></span>
                <div class="t_l"></div>
                <div>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div>
                                    <span>
                                        <i class="iconfont icon-taiguoyiliao" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>景点玩乐</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-youjigonglve"></i>
                                      <i>游记攻略</i>
                                    </span>
                                </div>
                                <div>
                                     <span>
                                        <i class="iconfont icon-meishi" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>美食</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-jiaotong"></i>
                                      <i>交通</i>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <i class="iconfont icon-chengshi" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>城市指南</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-tejiajipiao" ></i>
                                      <i>特价机票</i>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <i  class="iconfont icon-jiudian1" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>特惠酒店</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-zuche" ></i>
                                      <i>自驾租车</i>
                                    </span>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div>
                                    <span>
                                        <i class="iconfont icon-taiguoyiliao" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>景点玩乐</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-youjigonglve"></i>
                                      <i>游记攻略</i>
                                    </span>
                                </div>
                                <div>
                                     <span>
                                        <i class="iconfont icon-meishi" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>美食</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-jiaotong"></i>
                                      <i>交通</i>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <i class="iconfont icon-chengshi" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>城市指南</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-tejiajipiao" ></i>
                                      <i>特价机票</i>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <i  class="iconfont icon-jiudian1" style="margin-top: 20px;color: #13be78;font-size: 20px"></i>
                                      <i>特惠酒店</i>
                                    </span>
                                    <span>
                                      <i class="iconfont icon-zuche" ></i>
                                      <i>自驾租车</i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <img id="map" src="../assets/01.png" alt="">
                <h1>TOP必去</h1>
                <div style="margin: 0 auto;width: 90%;">
                    <div style="height: 168px">
                    <div style="float: left;width: 50%;">
                        <img src="../assets/02.png" alt="" style="width: 150px;">
                        <span style="width: 100%;text-align: center;float: left;margin-top: -20px;">香港景点好评top10</span>
                    </div>
                    <div  style="float: right;width: 50%;" >
                        <img src="../assets/03.png" alt="" style="width: 150px;float: right">
                        <span style="width: 100%;text-align: center;float: left">香港景点好评top10</span>
                    </div>
                    </div>
                    <div id="list">
                        <ul id="uu" style="width: 350px; ">
                            <li>
                                <img src="../assets/05.png" alt="" >
                                <div>太平山</div>
                                <span><img src="../assets/04.png" alt=""> </span>
                                <span>日游小团225元起</span>
                            </li>
                            <li>
                                <img src="../assets/06.png" alt="" >
                                <div>香港迪士尼乐园</div>
                                <span><img src="../assets/04.png" alt=""> </span>
                                <span>当地游462元起</span>
                            </li>
                            <li>
                                <img src="../assets/07.png" alt="" >
                                <div>香港海洋公园</div>
                                <span><img src="../assets/04.png" alt=""> </span>
                                <span>门票299元起</span>
                            </li>
                            <li>
                                <img src="../assets/05.png" alt="" >
                                <div>弥敦道</div>
                                <span><img src="../assets/04.png" alt=""> </span>

                            </li>
                            <li>
                                <img src="../assets/06.png" alt="" >
                                <div>中环至半山自动扶梯</div>
                                <span><img src="../assets/04.png" alt=""> </span>
                            </li>
                            <li>
                                <img src="../assets/07.png" alt="" >
                                <div>星光大道</div>
                                <span><img src="../assets/04.png" alt=""></span>
                            </li>
                        </ul>

                    </div>
                    <div id="all">
                        查看全部 >
                    </div>
                </div>
                <div class="t_l" style="margin-top: 50px"></div>
                <v-s></v-s>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
     import special from "./special.vue"
    export default {
        name: 'swiper',
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
        components:{
          "v-s":special
        },
        methods:{
            handleTopChange(status) {
                console.log(status)
//                setInterval(()=>{
                this.topStatus = status;
//                },500)

            },
            toDropText(){
                console.log(1)
            },
            loadTop() {
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom() {
//            加载更多数据
                this.allLoaded = true;// 若数据已全部获取完毕
                this.$refs.loadmore.onBottomLoaded();
            }
        },
        mounted(){
            var mySwiper = new Swiper('.swiper-container',{
                direction: 'horizontal', loop: true,
                pagination: '.swiper-pagination',

            })
        }
    }
</script>

<style>
    #search{
        width:352px;
        height:40px;
        position:absolute;
        top:90px;background: rgba(255,255,255,0.5);
        border-radius:48px;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
        color: #ffffff;
        left:10px;
    }
    #title{
        height:50px;
        width:100%;
        line-height: 50px;
        border-bottom: 1px solid #e9e9e9;
        border-top:1px solid #e9e9e9;
        font-size: 12px;
        color: #414141;
    }
    .t_l{
        width: 100vw;
        height:13px;
        background: #eeeeee;
    }
    #load{
        height:1900px;
        margin-top: 87px;
    }
    .swiper-container{
        width:100vw;
        height: 200px;
    }
    .swiper-slide{
        width:100vw;
        height: 200px;
        display: flex;
        flex-direction: row;

    }
    .swiper-slide>div{
        flex: 1;
       
    }
    .swiper-slide>div>span{
        display: block;
        height:50%;
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /*justify-content: center;*/
    }
    .swiper-slide>div>span i{
        height:20px;
    }
    .iconfont{
        color: #13be78;
    }
    #map{
        width: 100vw;
        height:auto;
    }
    h1{
        width:100vw;
        text-align: center;
    }
    #list{
        width:100%;
        heigt:auto;

        border-top:solid 1px #d7d7d7;
        overflow: hidden;
        padding-top: 50px;
    }

    #uu li{
        width:32.6%;
        height:160px;
        list-style: none;
        float: left;
        line-height: 15px;
        margin-top: 20px;
    }
    #uu li img{
        width:93%;
        border-radius: 9px;
    }
    #all{
        width: 100vw;
        text-align: center;
        font-size: 12px;
        color: #13be78;
        height: 20px;
    }
</style>
