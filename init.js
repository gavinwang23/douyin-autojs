// console.show()
launchApp("抖音短视频")
text("我").findOne().parent().parent().parent().click()
text("密码登录").findOne().click()
//勾选checkBox
id("el2").findOne().click()
text("请输入手机号").findOne().setText("15205733272")
id("e6s").findOne().setText("15205733272")

// //点击密码登录
// console.log("点击密码登录")
// //id("d76").findOne(2000).click()
// text("密码登录").findOne().parent().parent().click()
// sleep(5000)

// //输入手机号
// console.log("输入手机号")
// id("duq").findOne().Text("15205733272")
// sleep(2000)

// //输入密码
// console.log("输入密码")
// id("dt2").findOne().setText("wjw990123")
// sleep(2000)

// //点击登录
// console.log("点击登录")
// id("dlv").findOne().click()

