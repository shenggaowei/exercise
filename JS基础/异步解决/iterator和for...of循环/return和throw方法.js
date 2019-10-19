/**
 * case 1
 * @param {*} file 
 * 通常是因为出错，或者有break或者continue语句 必须返回一个对象
 */
function readLinesSync(file) { 
  return {
    next() { 
      return {done:true}
    },
    return() { 
      file.close();
      return {
        done:true
      }
    }
  }
}

for (let line of readLinesSync('filename')) { 
  console.log(line);
  break
}