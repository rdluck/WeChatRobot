# WeChatRobot

微信机器人，能够排忧解难，帮你处理大量的操作。也可以陪你聊天，获取想要的信息。

## 项目目录

```
WechatRobot
    |---assets  // 资源目录
    |    |---avatar // 头像资源
    |    |---document // 文档资源
    |    |---image // 图片资源资源
    |    |---match // 朋友圈配图资源
    |    |---video // 视频资源
    |    |---voice // 语音资源
    |    |---wallpaper // 壁纸资源
    |---config  // 配置文件目录
    |---feature  // 功能文件目录，存放各个功能的实现
    |---knowledge  // 知识库，早期版本知识库，在 v0.3.0 中会被删除，改用独立项目支持
    |---log  // 日志目录，后续会被删除
    |---model  // mongoose 数据库模型目录，存放数据库映射关系
    |---temp  // 聊天记录存放目录，在 v0.2.4 中被删除，改用数据库记录
    |---test  // 存放用于临时测试的文件
    |---token  // 百度 AI Token 存放目录，在 v0.3.0 接入百度 AI 后删除，改用数据库记录
    |---tools  // 工具类存放目录，主要存放相关的工具类，为功能模块提供支持
    |---index.js  // 项目主文件，是机器人的入口文件
    |---plan.md  // 功能规划文件，存放功能列表，以及完成情况
    |---updatelog.md  // 项目更新日志
    |---LICENSE  // 开源证书文件
```

## 项目依赖环境

node: 版本大于 v10.0.0

## 运行

安装依赖：

```
npm install
```

修改所需要的配置信息：

打开 config.js 文件，补全文件中的相应的Key，目前有：

```
// 心知天气API密钥
weatherAPIKey: '',
// 百度AI应用 API Key
baiduApiKey: '',
// 百度AI应用 Secret Key
baiduSecretKey: '',
// 聚合数据，获取笑话的key
jokeKey: '',
// 聚合数据，问答类的key
qAndAKey: ''
```

运行：

```
npm start
```

扫描终端二维码，登录，然后完成。

## 注意

目前百度AI接口正在开发中，相应功能还未实现，可以不用填写百度AI相应的 key 。（在 v0.3.0 等后续版本中将接入百度AI中心）

## 知识库功能

此版本展示关闭知识库功能，下个版本将重构知识库功能，带来更加好用的知识库管理和整理功能。

修改 order.js 文件中的 ORDER_KEY 对象可以修改警告的关键字。

## 目录说明

log：保存项目的日志信息，目前没有使用。

model：存放数据库模型。

knowledge：保存知识库资料，此版本没有知识库功能，后续版本会替换成独立项目匹配知识库，管理知识库。

token：保存百度AI的 Access Token 

## 开源协议

MIT License

Copyright (c) 2018 康兵奎

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## [更新日志](./updatelog.md)
