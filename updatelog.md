# 更新记录

## 2018-05-13

- 完成基本的聊天内容分析回复功能
- 能够查询天气
- 能够支持问答
- 能够讲笑话
- 能够维护群和谐文明发展

## 2018-05-14

- 接入百度AI自然语言处理分析（完成30%）

## 2018-05-15

- 重新整理目录结构，拆分功能模块

## 2018-06-20

- 回填各项配置的参数，整理需要的新的参数，为重构做准备

## 2018-06-27

- 项目开始重构，更新依赖库版本
- 项目接入 MongoDB 数据库，数据保存依赖数据库
- 项目接入 log4js 日志系统，记录项目运行状态
- 整理依赖库提供的方法，增加思维导图文件
- 版本号改为 v0.2.0

## 2018-06-28

- 机器人相关模块的工具方法编写
- 增加功能梳理，并评估是否能够实现
- 引入 FileBox 处理消息中的文件
- 引入 node-schedule 创建定时任务，定时执行操作

## 2018-06-29

- 拆分天气预报和笑话为单独的功能模块
- 替换 mongolass 为 mongoose
- 完成聊天数据保存功能方法

## 2018-07-02

- 整理目录结构
- 修改版本计划表
- 完成资源消息的发送功能
- 删除不必要的文件
- 升级依赖库到 next 版本
- 修改天气、笑话等功能模块
- 完成提醒模块功能开发
- 修改 readme 文件，增加目录结构

## 2018-07-03

- 完成群聊消息和单聊消息
- 完成主要逻辑分支的判断
- 完成机器人主要方法的监听


## 2018-07-04

- 新增诗句功能模块
- 修改部分功能计划，推迟到下版本
- 完成登录和用户信息获取的调试
- 依赖库版本存在问题，需要等待依赖库的升级后再进行继续开发

## 2018-07-12

- 更新Wechaty到v0.18.3
- 整体测试完成，基本消息能够正常发送、接收、保存

## 2018-07-13

- 文档更新，拉取稳定版本分支
- 修改版本到 v0.2.5 修改入口文件，删除无用的文件