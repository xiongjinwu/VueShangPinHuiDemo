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
//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写VueRouter.prototype身上的方法了
VueRouter.prototype.push = function(location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
//重写replace方法
VueRouter.prototype.replace = function(location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
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
      meta: { isShow: true },
    },
    {
      //下面这种写法：代表的是params参数可以传递|当然也可以不传递  ?(正则:两次代表出现次数0|1)
      //今晚在练习的时候，切记?给我带上，因为咱们项目当中params参数就可以传递|不传递也可以
      path: "/search/:keyword?",
      component: Search,
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
  ],
});
