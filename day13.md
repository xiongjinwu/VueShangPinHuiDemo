1)个人中心完成
面试的时候:是否封装过组件、分页器、日历
个人中心当中:分页器

2)全局守卫
未登录访问 ，交易相关（trade）、支付相关（pay、paysuccess）、用户中心（center）相关跳转到 登录页面

3)组件内守卫
只有从购物车界面才能跳转到交易页面（创建订单）
只有从交易页面（创建订单）页面才能跳转到支付页面
只有从支付页面才能跳转到支付成功页面

4)图片懒加载
https://www.npmjs.com/package/vue-lazyload
自定义插件:

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




6)路由懒加载


6)打包上限|CSDN

6.1 打包 npm run build

项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
有了 map 就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
所以该文件如果项目不需要是可以去除掉
vue.config.js 配置
productionSourceMap:false


6.2 购买云服务器

1：阿里云  2:腾讯云 等等

2：设置安全组，让服务器一些端口号打开

3:利用xshell工具登录服务器

linux： /更目录     

linux常用指令: cd 跳转目录   ls 查看     mkdir创建目录  pwd：查看绝对路径

                    

























6.3 安全组设置

6.4xshell 链接服务器与与 linux 指令
cd /【根目录】 mkdir 创建文件 ls 查看 pwd 绝对路径




6.5nginx 反向代理

yum install nginx [etc]



location /api {
  proxy_pass http://182.92.128.115;
}
	
service nginx start
service nginx restart
service nginx stop





6.6nginx？
1:为什么访问服务器IP地址就可以访问到咱们项目？ ----配置一些东西
http://82.156.11.187/
刚刚在服务器上=>/root/jch/www/shangpinhui/dist


2:项目的数据来自于http://39.98.123.211



nginx配置:

1:xshell进入根目录/etc

2:进入etc目录，这个目录下有一个nginx目录，进入到这个目录【已经安装过nginx：如果没有安装过，四五个文件】

3：如果想安装nginx:yum install nginx 

4:安装完nginx服务器以后，你会发现在nginx目录下，多了一个nginx.conf文件，在这个文件中进行配置

5：vim nginx.conf进行编辑，主要添加如下两项
解决第一个问题:
location / {
  	root    /root/jch/www/shangpinhui/dist;
    index  index.html;
    try_files $uri $uri/ /index.html;
}
//解决第二个问题
location /api {
  proxy_pass http://39.98.123.211;
}

6:nginx服务器跑起来
service nginx start
