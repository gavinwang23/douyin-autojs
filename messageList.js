console.show()

var FindMsgList = id('eo5').findOne(2000)
console.log('查找完')

if(FindMsgList){
    console.log('找到eo5')
}
else if(!FindMsgList){
    console.log('没找到eo5')
}

id("eza").findOne().children().forEach(child => {
    var target = child.findOne(id("eo5"));
    target.click();
    });