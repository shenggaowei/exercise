/**
 * 子字符串匹配
 * 1. 使用括号，将导致相应的子匹配被记住。
 *    在表达式执行过程中可以使用 \1 \2 来获取子匹配的引用
 *    在执行过后可以使用 $1 $2...
 */
{
    let reg = /(\w+)\s(\w+)/
    var str = 'shenggaoddd ddd ccc fff' 
    let result = str.replace(reg,'$2 $1')
    console.log(result);
}