async function f() {
    await Promise.reject('我出错了');
}

f().then(data => {
    console.log(data)
}).catch(e => console.log(e))