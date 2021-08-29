//引入一级路由组件

import Login from "@/views/Login";
import Register from "@/views/Register";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
import PaySuccess from "@/views/PaySuccess";
import Center from "@/views/Center";
//引入二级路由组件
import MyOrder from "@/views/Center/myOrder";
import GroupOrder from "@/views/Center/groupOrder";
/*
当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
*/
//路由配置信息
export default [
  {
    path: "/center",
    component: Center,
    meta: { isShow: true },
    //二级路由组件
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { isShow: true },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { isShow: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { isShow: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //去交易页面，必须是从购物车而来
      if (from.path == "/shopcart") {
        next();
      } else {
        //其他的路由组件而来，停留在当前
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { isShow: true },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { isShow: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { isShow: true },
  },
  ,
  {
    path: "/home",
    component:()=>import("@/views/Home"),
    //路由元信息key不能瞎写：只能叫做meta
    meta: { isShow: true },
  },
  {
    //下面这种写法：代表的是params参数可以传递|当然也可以不传递  ?(正则:两次代表出现次数0|1)
    //今晚在练习的时候，切记?给我带上，因为咱们项目当中params参数就可以传递|不传递也可以
    path: "/search/:keyword?",
    component:()=>{
        console.log(111111);
      return  import('@/views/Search');
    }
    ,
    meta: { isShow: true },
    // 命名路由
    name: "search",
    //路由是可以给组件传递props的
    //函数的写法才是重要的
    props: (route) => ({
      keyword: route.params.keyword,
      big: route.query.big,
    }),
  },
  {
    path: "/login",
    component: Login,
    meta: { isShow: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { isShow: false },
  },
  // 重定向：本来上来访问的是/根，我就让你去home
  {
    path: "/",
    redirect: "/home",
  },
];
