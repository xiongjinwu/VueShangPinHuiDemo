import Vue from 'vue'
import App from './App.vue'
//引入路由相关文件
import router from '@/router';

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from '@/components/TypeNav';
//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name,typeNav);

new Vue({
  render: h => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router
}).$mount('#app')
