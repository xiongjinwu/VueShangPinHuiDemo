1)进入项目阶段，一定要把老师每天敲得代码，至少书写三遍以上。
组长:队友（一组），拉一个小群，组长每天统计你们组成员是否书写三遍以上。
切记：老师讲课的时候，千万别留神。

2）项目当中一些需要的资源，都已经上传到QQ群里面了。



3）vue-cli脚手架目录解释.
node_modules文件夹:用于装依赖的文件夹
public文件：经常放置一些静态资源，在webpack打包的时候，webpack不会编译这些静态资源，
直接打包放置在dist文件夹中
src:放置程序员源代码的文件夹
   main.js-----程序的入口文件（也是最先执行的文件）
   App.vue-----程序当中唯一的根组件
   components文件：这个文件夹经常放置非路由组件（一般我们也放置一些共用的组件：全局组件）
   assets文件：也是放置项目当中共用的静态资源（这个文件夹中的静态资源webpack会编译的）
babel.config.js文件：服务于babel【翻译官】
package.json（README.md):项目说明书
package-lock.json文件：缓存性的文件（可以删除|也可以不删）

4）脚手架一些配置
1:ESLINT校验工具，比较恶心的，先把咱们的校验工具关闭了
第一步：需要创建vue.config.js文件关闭eslint校验工具
module.exports = {
    // 关闭ESLINT校验工具
    onLintSave:false
}
第二步：当配置文件发生变化的时候，项目需要重新运行

2)让项目在浏览器中自动打开
第一步：找到package.json文件
第二步：修改page.json文件底下内容
 "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

3)src文件夹别名设置.
src文件夹是程序员的源代码文件夹【经常创建文件夹与文件】，如果你的项目越来越大，
导致文件|文件夹目录结果很深，找某一个文件很不方便，可能出现这种写法
import  a from '../../../../view/home/index.vue'
1:src文件夹别名是@,现在书写@的时候，是没有提示的，因此我们需要配置src别名（你书写@符号有提示）
2：创建一个jsconfig.json文件
3:{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}


4)路由组件与非路由组件拆分？
前台路由：K-V
key：就是浏览器中的URL地址
value:相应的路由组件内容
目前而言:路由组件应该有几个

2非路由组件：Header[home、search、login、register]、Footer【home、search】

4路由组件:home、search、login、register目前而言应该是一级路由【但是有没有二级路由待定】
