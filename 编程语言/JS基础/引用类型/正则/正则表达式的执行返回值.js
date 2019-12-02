{
    let reg = /d(b+)d/g
    let str = 'cdbbdbsbz'
    let result = reg.exec(str)
    console.log(result); // [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
    console.log(reg.lastIndex) // 5
}

/**
 * 将正则表达式赋给一个变量 在后面的匹配中 可以记录正则表达式的属性
 * 如果使用未分配给一个变量的正则表达式，则在随后将不能访问其属性
 */
{
    let str = 'cdbbdbsbz'
    let result = /d(b+)d/g.exec(str)
    console.log(result)
    console.log(/d(b+)d/g.lastIndex)
}