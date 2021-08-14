import { reqgetCategoryList } from "@/api";
//home模块的仓库
const state = {
    //home仓库中存储三级菜单的数据
    categoryList:[]
};
//mutions是唯一修改state的地方
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    }
};
//action|用户处理派发action地方的，可以书写异步语句、自己逻辑地方
const actions = {
  async getCategoryList({commit}) {
    //reqgetCategoryList返回的是一个Promise对象
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqgetCategoryList();
    if(result.code==200){
       commit("GETCATEGORYLIST",result.data);
     }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
