// [xyz] 匹配字符集中的任意字符
// 字符集合 匹配方括号中的任意字符，包括转义序列。'-'代替范围。特殊符号在字符集中没有特殊意义。所以可转义也可不转义
{
    let reg = /[a-d.+*]{4}/
    let str = 'b.+*risket'
    let result = reg.exec(str)
    console.log(result)
}

// [^xyz] 匹配任何没有包含在括号中的字符
{
    let reg = /[^abc]/
    let str = 'ffhop'
    let result = reg.exec(str)
    console.log(reg.lastIndex)
}

// [\b] 匹配一个退格 backspace
{

}

