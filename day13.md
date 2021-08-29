1)个人中心完成
面试的时候:是否封装过组件、分页器、日历
个人中心当中:分页器

2)全局守卫
未登录访问 ，交易相关（trade）、支付相关（pay、paysuccess）、用户中心（center）相关跳转到  登录页面


3)路由独享守卫

只有从购物车界面才能跳转到交易页面（创建订单）
只有从交易页面（创建订单）页面才能跳转到支付页面
只有从支付页面才能跳转到支付成功页面


4)图片懒加载
https://www.npmjs.com/package/vue-lazyload









5)vee-validate 基本使用

第一步：插件安装与引入
cnpm i vee-validate@2 --save 安装的插件安装 2 版本的

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'  
Vue.use(VeeValidate)

第二步：提示信息
VeeValidate.Validator.localize('zh_CN', {
messages: {
...zh_CN.messages,
is: (field) => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
},
attributes: { // 给校验的 field 属性名映射中文名称
phone: '手机号',
code: '验证码',
password:'密码',
password1:'确认密码',
isCheck:'协议'
}
})

第三步：基本使用
<input
          placeholder="请输入你的手机号"
          v-model="phone"
          name="phone"
          v-validate="{ required: true, regex: /^1\d{10}$/ }"
          :class="{ invalid: errors.has('phone') }"
        />
<span class="error-msg">{{ errors.first("phone") }}</span>

const success = await this.\$validator.validateAll(); //全部表单验证

VeeValidate.Validator.extend('agree', {
validate: value => {
return value
},
getMessage: field => field + '必须同意'
})


6)打包上限

6.1打包 npm run build 
项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 
有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
所以该文件如果项目不需要是可以去除掉
vue.config.js配置
productionSourceMap:false


6.2购买云服务器


6.3安全组设置


6.4xshell链接服务器与与linux指令
cd /【根目录】  mkdir 创建文件   ls查看  pwd 绝对路径


6.5nginx反向代理
yum install nginx [etc]









复习：
昨天支付（elementUI+ qrcode ） + 个人中心（二级路由）