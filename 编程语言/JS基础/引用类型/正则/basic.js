// (x) 捕获组
{
    let reg1 = /(foo) (?:bar) \1 \2/
    let str = 'foo bar foo bar'
    let result = reg1.exec(str)
    let reverseStr = str.replace(reg1,'$2 $1')
    console.log(reverseStr,result);
}

// (?:x) 非捕获括号
{
    let reg1 = /(?:foo){1,2}/
    let str = 'foofoo'
    let result = reg1.exec(str);
    console.log(result);
}

// x(?=y) 先行断言 y并不是匹配结果的一部分
{
    let reg = /Jack(?=Sprat|Frost)/
    let str = 'JackSprat'
    let result = reg.exec(str)
    console.log(result);

    //case1 匹配 shenggao 前面的字符 wei
    let reg2 = /\w+(?=shenggao)/
    let str = 'weishenggao'
    let case1 = reg2.exec(str)
    console.log(case1[0])
}

// (?<=y)x 后行断言 y并不是匹配的一部分
{
    let reg = /(?<=Jack)Sprat/
    let str = 'JackSprat Jack'
    let result = reg.exec(str)
    console.log(result)

    //case1 获取weishenggao 后面的 shenggao
    let reg2 = /(?<=wei)(\w+)/
    let name = 'weishenggao'
    let result2 = reg2.exec(name)
    console.log(result2[0])
}

// /x(?!y)/ 正向否定查找 x后面不跟着y，才会匹配x
{
    let reg = /\d+(?!\.)/
    let str1 = '3.14'
    let result1 = reg.exec(str1)
    console.log(result1)

    // \w+会尽可能多的匹配字符
    // ? 如果只匹配第一个ff 应该怎么做
    let reg2 = /(?<=wei)\w+(?=dd)/
    let str2 = 'weishenggaofffffddffffdd'
    let result2 = reg2.exec(str2)
    console.log(result2)
}

// 反向否定查找 /(?<!x)y/ 匹配y，其前面不是x
{
    let reg1 = /(?<=-333)\w+/
    let str = '-33344'
    let result3 = reg1.exec(str)
    console.log(result3)
}

// | 量词 
{

}

// {} 字符出现次数
{

}

// [] 字符出现的集合
{

}

// 边界
{

}

// 特殊字符
{
}