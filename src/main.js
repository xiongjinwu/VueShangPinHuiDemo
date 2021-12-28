import Vue from "vue";
import App from "./App.vue";
//引入路由相关文件
import router from "@/router";
//引入仓库进行注册
import store from "@/store";

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";
import Carsousel from "@/components/Carousel";
import Pagination from '@/components/Pagination'
import { Button,MessageBox} from 'element-ui';

//全局组件：第一个参数 组件名字  第二个参数：哪个组件
Vue.component('typeNav', typeNav);  //三级联动导航
Vue.component('Carsousel', Carsousel);//轮播图
Vue.component(Pagination.name,Pagination);// 分页
Vue.component(Button.name,Button);

//ElementUI注册组件的时候，另一种写法，挂在原型上！！！
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import "@/mock/mockServe";        //引入MockServer.js----mock模拟数据
import "swiper/css/swiper.css";  //引入swiper样式,全局可用

import * as API from '@/api';  //统一引入、统一接口api文件夹里面全部请求函数
import atm from '@/assets/1.gif';
//引入插件
import VueLazyload from 'vue-lazyload';
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading:atm
});
//引入自定义插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
    name:'upper'
});

import "@/plugins/validate";  //引入表单校验插件

new Vue({
  render: (h) => h(App),
  beforeCreate() { //全局事件总线$bus配置
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;  //将请求API放到vue原型对象
  },
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,
  //在入口文件这里注册store,在每一个组件的身上都拥有一个$store这个属性
  store,
}).$mount("#app");
