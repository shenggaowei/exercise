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

// (?<=y)x 后行断言 只有当x前面是y
{
    let reg = /(?<=Jack)\w+/
    let str = 'JackSprat'
    let result = reg.exec(str)
    console.log(result)

    //case1 获取weishenggao 后面的 shenggao
    let reg2 = /(?<=wei)\w+/
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

// x(?!y) 只有当x后面不是y时匹配y 正向否定查找
{
    // 匹配小数点后面的数值
    let reg = /\d+(?!\.)/
    let str = '3.14'
    let result = reg.exec(str)
    console.log(result)

    //匹配 weishenggao sheng 后面的字符
    let reg1 = /\w+(?!sheng)/
    let str2 = 'weishenggao'
    let result2 = reg1.exec(str2)
    console.log(result2)
}

// (?<!x)y 只有当y前面不是x时才会匹配y  反向否定查找
{
    let reg = /(?<!-)\d+/
    let result1 = reg.exec('-1')
    let result2 = reg.exec('1')
    console.log(result1,result2)

    // wsg shenggao wei shenggao
    let reg2 = /(?<!\s)\w+/
    let str =  ' wsg shenggao wei shenggao'
    let result3 = reg2.exec(str)
    console.log(result3)
}