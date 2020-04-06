
/**
 * str.match(regexp)
 * return 
 * 1 如果使用 g 标志，则将返回与正则表达式匹配的所有结果，但不会返回捕获组
 * 2 如果未使用捕获组，则返回与正则表达式的第一个完整匹配和相关的捕获组。同时包含 groups index input 属性
 * 
 * 正则表达式如果不包含g标志，则str.match和reg.exec方法返回的一致
 */

 // match的i标志
 {
  let str = 'For more information, see Chapter 3.4.5.1'
  let reg = /see chapter (\d+(\.\d+)*)/i
  let result = str.match(reg)
  console.log(result)   
  
  result = [ 'see Chapter 3.4.5.1', // 整个匹配
  '3.4.5.1', // 被 (\d+(\.\d+)*) 捕获的捕获组
  '.1', // 被 (\.\d+) 捕获的最后一个值
  index: 22, // 所匹配的字符串在原串中从0开始的索引下标位置
  input: 'For more information, see Chapter 3.4.5.1', // 原始字符串
  groups: undefined ]
 }

 // match使用g和i标
 {
     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
     let reg = /[A-E]/gi
     let result = str.match(reg)
     console.log(result)
 }

 //使用match(),不传参数
 {
    var str = "Nothing will come of nothing.";
    str.match();   // returns [""]
 }