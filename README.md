
Application created by [React](https://github.com/facebook/react "React") & [Redux](https://github.com/reactjs/redux "Redux") & [ant-design](https://github.com/ant-design/ant-design "ant-design")

## 环境要求

npm版本3.0.0以上


## 目录结构

config/

- mockConfig.json -------------------------------------- mock数据相关配置


mock/  -------------------------------------- mock数据

- data/  -------------------------------------直接数据
- template/-----------------------------------模板数据

asset/  -------------------------------------- 静态资源

  - css/-------------------------------------- 样式
  - image/--------------------------------------图片

src/  ---------------------------------------------------- 源码


- component/--------------------------------------功能组件

	- contents------------------------------------页面内容
	- layout ------------------------------------页面布局
	- App.js-------------------------------------整个App component
- redux/ -----------------------------------------redux相关

	- action/------------------------------------action
	- reducer/------------------------------------reducer
	- store/--------------------------------------store
- router/-----------------------------------------路由

	- router.js

main.js----------------------------------------项目入口

app.html --------------------------------------开发环境html模板

appBuild.html ---------------------------------生产环境构建使用的html模板

index.html ------------------------------------bizdp自动进入主页需要的


## 运行命令

  1. 安装依赖:
  ```
  $ npm install
  ```

  2. 启动项目:
  ```
  $ npm start               // 端口号随机生成
  ```

  3. 打开浏览器: windows操作系统下bizdp会自动打开默认浏览器

  4. 自己玩 : ).

## 参考资料

1. [React 入门实例教程 ](http://www.ruanyifeng.com/blog/2015/03/react.html)
2. [Redux 入门教程（一）：基本用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
3. [Redux 入门教程（二）：中间件与异步操作](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)
4. [Redux 入门教程（三）：React-Redux 的用法](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
5. [React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
6. [脚手架实践](https://github.com/jovey-zheng/react-start-kit)
7. [ant Design](https://ant.design/)
