const glob = require("glob");

console.log("我是glob");

glob("src/**/*", {}, function (er, files) {
  console.log(files);
});
