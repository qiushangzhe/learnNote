# vue2 初始化
## step1 安装淘宝镜像

```
npm install -g cnpm --registry= https://registry.npm.taobao.org
```

## step2 安装webpack
```
cnpm install webpack -g
```

## step3 安装vue脚手架
```
npm install vue-cli -g
```
## step4 创建项目

```
执行：vue init webpack 项目名称
然后会出现如下东西
- Project name （项目名称）回车就行
- Project description （项目介绍）回车就行
- Author （作者）回车就行
- Vuebuild （Vue build 方式） 回车就行
- Install vue-router? (Y/n) （是否安装路由模块）输入Y 按回车
- Use ESLint to lint your code? （是否使用ESLint进行语法检查） 看需要，个人觉得太墨迹， 输入n然后回车
- Setup unit tests with Karma + Mocha? (是否安装自动化测试模块)  看需要，个人觉得太墨迹， 输入n然后回车
- Setup e2e tests with Nightwatch?(e2e测试模块)  看需要，个人觉得太墨迹， 输入n然后回车
```

## step5 根据提示初始化项目

```
cd 你的项目名
npm install
npm run dev
```


