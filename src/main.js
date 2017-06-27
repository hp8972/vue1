import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Mint from 'mint-ui';
Vue.use(Mint);
import header from './compontents/index.vue'
import Header from './compontents/hy-header.vue'
import swiper from './compontents/swiper.vue'
import hotel from './compontents/hotel.vue'
import jhshequ from './compontents/jhshequ.vue'
import jhqian from './compontents/jhqian.vue'
import mudidi from './compontents/mudidi.vue'
import shop from './compontents/shop.vue'
import com from './compontents/com.vue'
import getup from './compontents/getup.vue'
import login from './compontents/login.vue'
import reg from './compontents/reg.vue'
import zyl from './compontents/zylyoulun.vue'
import Hpfree from './compontents/Hpfree.vue'
import Hplist from './compontents/Hplist.vue'
import home from './compontents/home.vue'
import about from './compontents/about.vue'
import other from './compontents/other.vue'
var  route=[
    {path:"/",component:header},
    {path:"/Header",component:Header,
    "children":[
        {path:"/swiper",component:swiper},
        {path:"/Hpfree",component:Hpfree,
            "children":[
                {path:"/Hplist",component:Hplist},
                {path:"/Hpfree",redirect:"/Hplist"}

            ]

    },
        {path:"/hotel",component:hotel}
    ],
        path:"*",redirect:"/swiper"
    },
    {path:"/Hp",component:Hpfree,
        "children":[
            {path:"/Hplist",component:Hplist},
        ],
    path:"*",redirect:"/Hplist"
    },
    {path:"/shequ",component:jhshequ },
    {path:"/jhqian",component:jhqian },
    {path:"/mudidi",component:mudidi},
    {path:"/shop",component:zyl},
    {path:'/com',component:com},
    {path:'/getup',component:getup},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/home',component:home},
    {path:'/about',component:about},
    {path:'/other',component:other},
    // {path:'/about',component:about}
]
var router=new VueRouter({
    routes:route
})
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
