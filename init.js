console.show()
console.log("test")

var startUp = app.launch("com.ss.android.ugc.aweme")

sleep(3000)
console.log("点击消息")
id("fiw").className("android.widget.TextView").text("消息").findOne().click()