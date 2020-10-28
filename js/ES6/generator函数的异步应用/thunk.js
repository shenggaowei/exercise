/**
 * js 中的thunk函数
 */
{
    function thunk(fn){
        return function(...rest){
            return function(cb){
                return  fn.call(this, ...rest, cb)
            }
        }
    }

    const thunk2 = fn => (...rest) => cb => fn.call(null, ...rest, cb)

    function f(a,cb){
        cb(a)
    }

    let r1 = thunk2(f)
    let r2 = r1('哈哈')(console.log)
}