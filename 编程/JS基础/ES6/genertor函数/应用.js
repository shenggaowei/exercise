// 异步操作的同步表达化
{
    function* main() {
        var result = yield request("http://some.url");
        console.log(result)
      }
      
      function request(url) {
          setTimeout(() => {
              it.next({name: '啊哈哈'})
          },  3000)
      }
      
      var it = main();
      it.next();
}

{
    
}