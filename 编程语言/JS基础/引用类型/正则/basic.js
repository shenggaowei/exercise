// (x) 捕获组
{
    let reg1 = /(foo) (?:bar) \1/
    let str = 'foo bar foo'
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

// (?<=y)x 后行断言
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