# 目录说明
- build: 打包逻辑，通过npm run build时执行该目录下的build.js
- config: 配置文件目录
- dist: 打包后的目录，用于发布。（在执行npm run build后产生）
- src/assets/constants: 常量文件目录
- src/assets/api: 存放接口定义文件
- src/assets/style: 存放样式文件
- src/assets/utils: 存放工具文件
- src/components: 存放项目自定义组件文件
- src/pages: 存放项目页面文件
- src/router: 存放Vue路由配置
- src/filters: 存放自定义过滤器
- src/directives: 存放自定义指令
- src/layouts: 存放布局组件
- static: 存放静态文件，通过`项目域名/static`可直接访问该目录下的资源

# 主题配置
element-ui使用的是sass预编译，项目当中我们主要使用的是less，所以关于主题变量的定义需要修改两处地方。
1. src/assets/style/theme.scss，此文件用于修改element-ui自带的系统变量，其中--color-primary为主题色
2. src/assets/style/variable.less，此文件用于存放系统全局配置变量，其中primary-color为主题色

# 环境配置
#### 环境运行命令
- 开发环境: `npm run dev`
- 测试环境: `npm run build-test`
- 生产环境: `npm run build`

#### 环境配置文件

- config/dev.env.js
- config/test.env.js
- config/prod.env.js

在配置文件中配置的属性，可通过`process.env.属性名`获取，可参考src/page/Index.vue。
其中，非开发环境命令运行后将产生dist目录，dist目录则为发布内容，将其发布至nginx或其他服务器即可。

# API本地代理配置
接口本地代理配置在config/index.js中，代码如下：
```javascript
module.exports = {
  dev: {
    ...
    proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    ...
  }
}
```


# 懒加载
采用import方法即可。详细用法请参考[Vue Router懒加载部分](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97)和[Webpack代码分离](https://webpack.docschina.org/guides/code-splitting/)

# API调用
- 接口调用采用axios，axios的默认配置信息在src/assets/utils/axios.js文件中。为了统一处理请求，我们为其做一层封装，详情请查看src/assets/utils/request.js。
- 关于request.js的使用，可以参考src/pages/Index.vue和src/assets/service/IndexService.js。

# 代码格式化
运行`npm run fix`即可，将自动根据ESLint配置进行代码格式化。

# ESLint的启动和关闭
ESLint的启动和禁用在config/index.js文件中配置，如下：
```javascript
module.exports = {
  dev: {
    useEslint: false, // 为false时表示禁用
    ...
  },
  ...
}
```
在关闭ESLint的情况下，仍可以运行`npm run fix`进行代码格式化。
