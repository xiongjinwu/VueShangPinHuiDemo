//统一管理项目接口的模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./ajax";
import mockRequests from "./mockAjax";
//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求、获取咱们的三级菜单数据。当前咱们这个函数只需要把服务器返回结果返回即可。
export const reqgetCategoryList = () =>requests.get(`/product/getBaseCategoryList`);
//切记:当前函数执行需要把服务器返回结果返回
//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get("/banner");
//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params});
//获取产品详情信息的接口  URL: /api/item/{ skuId }  请求方式：get   
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});
//将产品添加到购物车中（获取更新某一个产品的个数）
///api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})

//获取购物车列表数据接口
//URL:/api/cart/cartList   method:get 
export const reqCartList = ()=>requests({url:'/cart/cartList ',method:'get'});