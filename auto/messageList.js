console.show()

//打开消息
text("消息").findOne().parent().parent().parent().click()

var FindMsgList = id('eo5').find()
var FindMsgListChild = [];
console.log(FindMsgList.get(1).text())
console.log(FindMsgList.size())

for(let i = 0;i<FindMsgList.size();i++){
    FindMsgListChild[i] = FindMsgList.get(i).text()
   console.log('找到:' + FindMsgListChild[i])
}

console.log('查找完')

if(FindMsgList){
    console.log('找到eo5')
}
else if(!FindMsgList){
    console.log('没找到eo5')
}

