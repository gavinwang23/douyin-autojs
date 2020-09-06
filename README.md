# douyin-autojs

## 抖音版本 安卓v11.3.0

版本不同可能会因为控件名称不同而无法使用

autojs pro 7.6

## 工具下载地址（安卓模拟器、autojs、抖音apk）
[https://download.csdn.net/download/GavinWang23/12819492](https://download.csdn.net/download/GavinWang23/12819492)

## 使用步骤：
服务端：
1. 安装模拟器，最好将分辨率设置为720p
2. 在模拟器上安装抖音和autojs [https://download.csdn.net/download/GavinWang23/12819492](https://download.csdn.net/download/GavinWang23/12819492)
3. 打开autojs,模拟器开启无障碍模式,将message.js和autoSocket.js拷贝到auto.js,
4. 打开抖音，手动输入一下账号密码，登录，打开消息页面
5. 打开auto.js 运行autoSocket.js
6. 返回抖音的消息页面

客户端：[https://github.com/gavinwang23/wechaty-puppet-douyin](https://github.com/gavinwang23/wechaty-puppet-douyin)
1. 将config.ts中的host改为你自己的安卓模拟器ip
2. > node examples/ding-dong-bot.ts

3. 开启dingdongbot
