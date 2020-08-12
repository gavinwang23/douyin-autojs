importClass('java.io.BufferedReader');
importClass('java.io.IOException');
importClass('java.io.InputStream');
importClass('java.io.InputStreamReader');
importClass('java.io.OutputStream');
importClass('java.io.PrintWriter');
importClass('java.net.Socket');
importClass('java.net.ServerSocket');

console.show()
const message2 = require('message')
var serversocket = new ServerSocket(3000);
log('服务端已经启动,正在等待客户端连接...');
var socket = serversocket.accept();
var inputStream = socket.getInputStream();
//输入部分
var inputStreamReader = new InputStreamReader(inputStream);
var bufferedReader = new BufferedReader(inputStreamReader);
//输出部分
var outputStream = socket.getOutputStream();
var printWriter = new PrintWriter(outputStream);
var temp = null;
var info = "";
while (true) {
  //如果有新的消息则找到这个消息
  //进入阻塞状态
  log("判断是否有新消息")
  var receiveMessage = message2.noticeMessage();
  printWriter.print(receiveMessage);
  printWriter.flush();
  temp = bufferedReader.readLine();
  log(temp)
  // temp = bufferedReader.read();
  if (temp != null) {
    info = temp;
    //发送消息
    message2.sendMessage(info)
    log(info);
    //返回上一级
    id("cq7").findOne().click()
    //跳出循环结束连接
    //break;
  } else {
    sleep(5000)
    id("cq7").findOne().click()
  }
  sleep(200);
}











socket.shutdownOutput(); //关闭输出流
//关闭对应资源
printWriter.close();
outputStream.close();
bufferedReader.close();
inputStream.close();
serversocket.close();