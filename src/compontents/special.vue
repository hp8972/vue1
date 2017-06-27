<template>
    <div id="special">
      <h1 id="t_s">特色香港</h1>
        <div class="swiper-container" id="contain">
            <div class="swiper-wrapper">
                <div class="swiper-slide s_1" >
                         <div class="s_2">
                            <ul class="s_u">
                                <li>
                                    <img src="../assets/16.png" alt="">
                                    <span>相港亲子游</span>
                                </li>
                                <li>
                                    <img src="../assets/17.png" alt="">
                                    <span>亲近自然</span>
                                </li>
                                <li>
                                    <img src="../assets/18.png" alt="">
                                    <span>离岛风光</span>
                                </li>
                                <li>
                                    <img src="../assets/19.png" alt="">
                                    <span>夜游兰桂坊</span>
                                </li>
                            </ul>
                         </div>
                </div>
                <div class="swiper-slide s_1" >
                    <ul class="s_u">
                        <li>
                            <img src="../assets/08.png" alt="">
                            <span>粤菜港点</span>
                        </li>
                        <li>
                            <img src="../assets/09.png" alt="">
                            <span>美味日料</span>
                        </li>
                        <li>
                            <img src="../assets/10.png" alt="">
                            <span>品尝异国料理</span>
                        </li>
                        <li>
                            <img src="../assets/11.png" alt="">
                            <span>品味米其林</span>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide s_1" >
                    <ul class="s_u">
                        <li>
                            <img src="../assets/12.png" alt="">
                            <span>血拼圣地</span>
                        </li>
                        <li>
                            <img src="../assets/13.png" alt="">
                            <span>尖沙咀购物</span>
                        </li>
                        <li>
                            <img src="../assets/14.png" alt="">
                            <span>旧物古货</span>
                        </li>
                        <li>
                            <img src="../assets/15.png" alt="">
                            <span>电子产品购物地</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="swiper-pagination" id="s_p"></div>
            <div class="swiper-scrollbar"  id="scroll"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'special',
        data () {
            return {}
        },
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', loop: true,
// 如果需要分页器
                pagination: '.swiper-pagination',
                paginationClickable:"true",

// 如果需要滚动条
                scrollbar: '.swiper-scrollbar',
            })
              setTimeout(()=>{
                  $("#s_p span")[0].innerHTML="景点";
                  $("#s_p span")[1].innerHTML="美食"
                  $("#s_p span")[2].innerHTML="购物"
              },500)
                $("#s_p span").on("tap",function () {
                    $(this).css("color"," #13be78")
                    $(this).siblings().css("color"," black")

            })

        }

    }
</script>

<style>
    #contain{
        margin-top: 150px;
        overflow: visible;
    }
 #t_s{
     width:100vw;
     text-align: center;
 }
.s_1{
    margin-top: -50px;
    width: 100vw;
    height:auto;
}
.s_2{
    width:90%;
    height:300px;
}
.s_u li{
       list-style: none;
        width:40%;
    height: 150px;
    float: left;
    margin-left: 6%;
    line-height: 25px;
}
    .s_u li>img{
        width:100%;
        border-radius: 5px;
    }
 #s_p {
     bottom: 250px;
     display: flex;
     flex-direction: row;
     height:50px;

 }
    #s_p>span{
        flex:1;
        border-radius: 2px;
        background: white;
        height:100%;opacity: 1;
        font-size: 15px;

    }
    #scroll{
        bottom:250px;
    }
    .swiper-scrollbar-drag{
        width: 100px;
    }
    .swiper-wrapper{
        /*overflow: hidden;*/
        /*width: 100vw;*/
        /*height:300px;*/
    }
</style>
