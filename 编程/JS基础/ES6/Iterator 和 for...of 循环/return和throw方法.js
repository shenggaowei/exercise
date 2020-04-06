
/**
 * 有return方法的iterator函数
 */
function setIterator(){
    return {
        [Symbol.iterator]: function(){
            return {
                next: function(){
                    return {
                        value: 'haha',
                        done: false
                    }
                },
                return: function(){
                    console.log('return')
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

// 情况1
for(let value of setIterator()){
    console.log(value)
    break
}

// 情况2
for (let value of setIterator()){
    console.log(value)
    throw new Error()
}