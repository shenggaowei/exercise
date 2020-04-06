// 修改字符串的iterator接口
{
    let str = new String('shenggao');
    // 字面量形式创建的字符串，不能修改，只能销毁之前的再去修改。基本类型
    // 字面量形式不能修改其原型属性
    // new String形式创建的是一个对象 复杂类型
    str[Symbol.iterator] = function(){
        return {
            next: function(){
                if(this.first){
                    this.first = false;
                    return {value: 'bye',done: false}
                }else{
                    return {done: true}
                }
            },
            first: true
        }
    }
    console.log([...str])
}