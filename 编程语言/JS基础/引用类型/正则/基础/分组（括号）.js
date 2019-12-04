// 匹配子表达式
{
    let reg = /(spider)?Man/ 
    let str = 'Man'
    let str1 = 'spider Man'
    let 
}

// 匹配子表达式 记录匹配组
{
    let reg = /(\w+)\s(\w+)/
    var str = 'spider Man' 
    let result = reg.exec(str)
    console.log(result);
}

{
    // 获取执行中的引用
    let reg = /(\w+)\s(\w+)\s\1/
    var str = 'spider Man spider' 
    let result = reg.exec(str)
    console.log(result);
    
    //执行后的引用
    let reg2 = /(\w+)\s(\w+)/
    var str2 = 'spider Man' 
    let replaceStr = str2.replace(reg2,'$2 $1')
    console.log(replaceStr);

    //匹配但是不产生引用，正则不记录该匹配组
    let reg = /(?:\w+)\s(\w+)\s\1/
    var str = 'spider Man Man' 
    let result = reg.exec(str)
    console.log(result);
    
}