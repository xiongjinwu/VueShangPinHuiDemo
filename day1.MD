1)进入项目阶段，一定要把老师每天敲得代码，至少书写三遍以上。
组长:队友（一组），拉一个小群，组长每天统计你们组成员是否书写三遍以上。
切记：老师讲课的时候，千万别留神。

2）项目当中一些需要的资源，都已经上传到 QQ 群里面了。

3）vue-cli 脚手架目录解释.
node_modules 文件夹:用于装依赖的文件夹
public 文件：经常放置一些静态资源，在 webpack 打包的时候，webpack 不会编译这些静态资源，
直接打包放置在 dist 文件夹中
src:放置程序员源代码的文件夹
main.js-----程序的入口文件（也是最先执行的文件）
App.vue-----程序当中唯一的根组件
components 文件：这个文件夹经常放置非路由组件（一般我们也放置一些共用的组件：全局组件）
assets 文件：也是放置项目当中共用的静态资源（这个文件夹中的静态资源 webpack 会编译的）
babel.config.js 文件：服务于 babel【翻译官】
package.json（README.md):项目说明书
package-lock.json 文件：缓存性的文件（可以删除|也可以不删）

4）脚手架一些配置
1:ESLINT 校验工具，比较恶心的，先把咱们的校验工具关闭了
第一步：需要创建 vue.config.js 文件关闭 eslint 校验工具
module.exports = {
// 关闭 ESLINT 校验工具
onLintSave:false
}
第二步：当配置文件发生变化的时候，项目需要重新运行

2)让项目在浏览器中自动打开
第一步：找到 package.json 文件
第二步：修改 page.json 文件底下内容
"scripts": {
"serve": "vue-cli-service serve --open",
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
},

3)src 文件夹别名设置.
src 文件夹是程序员的源代码文件夹【经常创建文件夹与文件】，如果你的项目越来越大，
导致文件|文件夹目录结果很深，找某一个文件很不方便，可能出现这种写法
import a from '../../../../view/home/index.vue'
1:src 文件夹别名是@,现在书写@的时候，是没有提示的，因此我们需要配置 src 别名（你书写@符号有提示）
2：创建一个 jsconfig.json 文件
3:{
"compilerOptions": {
"baseUrl": "./",
"paths": {
"@/_": ["src/_"]
}
},
"exclude": ["node_modules", "dist"]
}

4)路由组件与非路由组件拆分？
前台路由：K-V
key：就是浏览器中的 URL 地址
value:相应的路由组件内容
目前而言:路由组件应该有几个

2 非路由组件：Header[home、search、login、register]、Footer【home、search】

4 路由组件:home、search、login、register 目前而言应该是一级路由【但是有没有二级路由待定】

5)路由组件与非路由组件区别？ 1)非路由组件放到 components 文件夹中|路由组件放到 views|pages 文件中 2)非路由组件使用的时候，是以标签的形式使用<Header/>,路由组件会出现在 router 文件夹中，而且使用的时候只是使用这个组件的名字
等等.....

使用非路由组件步骤：
拆分创建非路由组件的时候：布局、样式、图片老师已经给你们准备好了。
HTML + CSS + 资源（图片）
我们采用的是 less 样式，因此需要在 style 标签身上书写 lang="less"属性
切记：因为我们拷贝过来的是 less 样式，而我们的脚手架是不识别 less 样式的，因此需要安装 loader
less less-loader@5
1）定义
2）注册
3）使用

路由组件：四个
开发路由组件的时候，需要使用到 vue-router（3.xxxx）这个插件

6)路由跳转？
路由跳转是有两种形式：下面这两种路由跳转谁相比而言更好一些
1:声明式导航<router-link/> 简单
2:编程式导航 push|replace 简单：书写自己业务逻辑

7)Footer 组件可见与不可见操作？
v-if|v-show 经典面试题：他们两者有什么区别？ v-show:通过样式操作 DOM 显示与隐藏。
v-if：实实在在操作 DOM 上树与下树
v-show:只是通过 display 进行显示与隐藏
Footer 组件在 Home|Search 当中是可见的。
Footer 组件在 Login|Register 当中是不可见。

第一种解决方案：通过组件的\$route 属性获取路由 URL 信息判断，底部的组件是否可见。
第二种解决方案：路由元信息。

8)路由传递参数？
路由跳转：声明式导航 router-link、编程式导航 push|replace
路由传递参数：第一种是 query 参数 第二种是 params 参数
区别：params 参数属于路径当中一部分、query 参数 ?k=v & k=v 形式

问题:路由传递参数有几种写法
1:字符串形式 2:模板字符串 3:对象
//进行路由跳转并且路由传递参数:同时传递 params 参数与 query 参数
//如果传递 params 参数,路由需要占位,你不占位是不行的切记（老师温馨提示）
//第一种路由传递写法:字符串
//params 参数属于路径当中一部分
// this.$router.push("/search/"+this.keyword+"?big="+this.keyword.toUpperCase());
//第二种写法：模板字符串写法
//this.$router.push(`/search/${this.keyword}?big=${this.keyword.toUpperCase()}`)\
//第三种写法：对象写法
this.$router.push({
        name: "search",
        params: { keyword: this.keyword },
        query: { big: this.keyword.toUpperCase() },
});


http://127.0.0.1:8080/#/search/asd?big=ASD

http://127.0.0.1:8080/#/?big=ADD