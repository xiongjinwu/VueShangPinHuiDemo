//引入Vuex -----相当于咱们最大的仓库,模块化管理 modules
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex); //使用插件


import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
import trade from "./trade";

//需要暴露Vuex.Store类的实例(你需要暴露这个类的实例，如果你不对外暴露，外部是不能使用的)

export default new Vuex.Store({
  
  modules: { //模块modules管理：把小仓库进行合并变为大仓库
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  },
});
