
/**
 * 作用域变量可以当做参数传进去
 */
(function (b) {
  console.log(arguments)
  return 3
})(3);

   (function() { 
      var result = new Array();
      for (var i = 0; i < 10; i++){ 
        result[i] = function (num) { 
          return num
        }(i)
      }
     console.log(result);
     console.log(this)
    }
)()