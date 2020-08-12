// const { connect } = require("koa-route")

// console.show()
// console.log("test2")

// text("消息").findOne().parent().parent().parent().click()

// console.log('点击sept')
// text("Sept").findOne().parent().parent().parent().parent().click()
// //sleep(5000)
// console.log("输入")
// //id("df0").findOne().setText("hello")
// text("发送消息…").findOne().setText("hey,bro")
// console.log("ok")
// sleep(3000)
// console.log("点击发送")
// //id("eyk").findOne().click()
// click(665,1241)
// console.log("发送成功")
// if(id("eyk").findOne().parent().exists()){
//     console.log("哈哈哈哈")
// }

var message = {}
//转到消息页
message.goToMessagePage = function () {
    text("消息").findOne().parent().parent().parent().click()
    sleep(2000)
}

//找到联系人
message.findNameByHistoryList = function (name){
    var contact = text(name).findOne(5000)
    contact.parent().parent().parent().parent().click()
}

//发消息
message.sendMessage = function (text1){
    text("发送消息…").findOne().setText(text1)
    console.log("ok")
    sleep(3000)
    console.log("点击发送")
    click(665,1241)
}

//根据发消息人发来的消息提醒进入
message.noticeMessage = function () {
    let varNotify = null
    while (varNotify == null) {
      varNotify = id("ega").findOne(1000)
    }
    varNotify.parent().parent().parent().parent().parent().click()
    sleep(1000)
    //找到所有消息然后倒叙
    console.show()
    var allMessage = id("df3").find()
    // for(i = 0;i<allMessage.size();i++){
    //   console.log(allMessage.get(i).text())
    // }
    var allMessageNum = allMessage.size()
    console.log(allMessage.get(allMessageNum - 1).text())
    return allMessage.get(allMessageNum - 1).text()
  }

module.exports = message