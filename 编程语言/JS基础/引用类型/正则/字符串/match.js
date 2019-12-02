
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

     // 将所有正则表达式匹配的结果返回为一个数组
     result = [ 'A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e' ]
 }

 //使用match(),不传参数
 {
    var str = "Nothing will come of nothing.";
    str.match();   // returns [""]
 }

 // ？？？？？规则是什么  一个非正则表达式对象作为参数
 {
    var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
    console.log(str1.match("number"));   // "number" 是字符串。返回["number"]
    console.log(str1.match(NaN));        // NaN的类型是number。返回["NaN"]
    console.log(str1.match(Infinity));   // Infinity的类型是number。返回["Infinity"]
    console.log(str1.match(+Infinity));  // 返回["Infinity"]
    console.log(str1.match(-Infinity));  // 返回["-Infinity"]
    console.log(str2.match(65));         // 返回["65"]
    console.log(str2.match(+65));        // 有正号的number。返回["65"]
    console.log(str3.match(null));       // 返回["null"]
 }

 {
     let str = 'http://syt.athene.dev.smartstudy.com:10086/toefl/msk/12.html?sliceId=3932&courseId=20'
     let reg = /sliceId=(\d+)&courseId=(\d+)/
     let newStr = str.replace(reg,'sliceId=$2&courseId=$1');
     console.log(newStr)
 }

