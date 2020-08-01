console.show()
console.log("test2")

//sleep(5000)
console.log("输入")
id("df0").findOne().setText("hello")
console.log("ok")
sleep(3000)
console.log("点击发送")
//id("eyk").findOne().click()
click(665,1241)
console.log("发送成功")
if(id("eyk").findOne().parent().exists()){
    console.log("哈哈哈哈")
}