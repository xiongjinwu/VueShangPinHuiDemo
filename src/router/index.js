//引入vue-router路由插件
import VueRouter from "vue-router";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(VueRouter);
//引入一级路由组件
import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";
//对外暴露VueRouter类的实例
export default new VueRouter({
  //配置路由
  //第一:路径的前面需要有/(不是二级路由) 
  //路径中单词都是小写的
  //component右侧V别给我加单引号【字符串：组件是对象（VueComponent类的实例）】
  routes: [
    {
      path: "/home",
      component: Home,
      //路由元信息key不能瞎写：只能叫做meta
      meta:{isShow:true},
    },
    {
      path: "/search/:keyword",
      component: Search,
      meta:{isShow:true}
    },
    {
        path:'/login',
        component:Login,
        meta:{isShow:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{isShow:false}
    },
    // 重定向：本来上来访问的是/根，我就让你去home
    {
      path:'/',
      redirect:'/home'
    }
  ],
});

