{ 
    // 贪婪模式
    let reg2 = /\d+/
    let str2 = '123abc'
    let result2 = reg2.exec(str2)
    console.log(result2);

    // 非贪婪模式
    let reg3 = /\d+?/
    let str3 = '123abc'
    let result3 = reg3.exec(str3)
    console.log(result3); 

    //非贪婪模式的个例
    let reg4 = /\d+?a/
    let str4 = '123abc'
    let result4 = reg4.exec(str4) // 123a
    console.log(result4);
}

// | 或
{
    let reg = /green|red/
    let str = 'apple green'
    let result = reg.exec(str);
    console.log(result);
}

{
    // 匹配字符a只能出现1次
    let reg1 = /a{1}/
    // 匹配字符a至少出现1次
    let reg2 = /a{1,}/
    // 匹配字符a至少出现1次，最多出现3次
    let reg3 = /a{2,3}/

    let str = 'cannnnaaaady' 
    let result1 = reg1.exec(str) // [ 'a', index: 1, input: 'cannnnaaaady', groups: undefined ]
    let result2 = reg2.exec(str) // [ 'a', index: 1, input: 'cannnnaaaady', groups: undefined ]
    let result3 = reg3.exec(str) // [ 'aaa', index: 6, input: 'cannnnaaaady', groups: undefined ]
    console.log(result1,result2,result3);
}