let arr = [1, 3, 4, 5, 6, 3, 2, 5, 6, 3, 4, 9, 10, 1]

/**1 选择排序方式
 * 
 * 思路
 * 将标志位的每一项与后面的项进行对比
 * 一致则删除，j--
 */
function avoidRepeat(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let flag = arr[i];
      let temp = arr[j];
      if (temp === flag) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr
}

/** 2 indexOf || includes 判断是否存在
 * indexOf判断数组中的每一项 第一次出现的位置
 * 思路：
 * 1 新建一个空数组a1。
 * 2 循环需要去重数组的每一项，如果子项不在a1中，则push进去
 */
function avoidRepeat2(arr) {
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    let temp = arr[j];
    let notExigst = newArr.some(temp);
    if (notExigst) {
      newArr.push(temp);
    }
  }
  return newArr
}

/**3 filter 返回回调函数返回true所构成的数组
 * 
 * 思路
 * 循环数组的每一项，找到当前项在数组中第一次出现的位置。
 * 如果当前的循环下标和第一下出现的位置一致，则是第一次出现。需要进行操作记录。
 */
function avoidRepeat3(arr) {
  return arr.filter((ele, index) => index === arr.indexOf(ele))
}

/**4 reduce includes || indexOf 判断是否存在
 * 思路描述
 * reduce遍历子项，子项如果在pre数组中，则concat连接，否则跳过。
 */
function avoidRepeat4(arr) {
  return arr.reduce((pre, next) => pre.includes(next) ? pre : pre.concat(next), [])
}

/**5 匹配object key 
 * 
 * 思路描述
 * 将数组中的值当做key,利用obj的key值的唯一性。最后object.keys找到key的数组
 * 
 * 思路两个：for循环 或 reduce
 */
function avoidRepeat5(arr) {
  return Object.keys(arr.reduce((pre, next) => {
    pre[next] = true;
    return pre
  }, {}))
}

/**6 利用set的自动去重功能
 * 
 */
function avoidRepeat6(arr) {
  return [...new Set(arr)]
}

/**7 排序进行处理 
 *  思路描述
 * 
 * 将数组进行排序，遍历数组，将当前项和下一项进行对比，一样则将下一项删除掉。最后return最后一个。
 * 
 */
function avoidRepeat7(arr) {
  let sortArr = arr.sort((a, b) => b - a);
  for (let i = 0; i < sortArr.length; i++) {
    let cur = sortArr[i];
    let next = sortArr[i + 1];
    if (cur === next) {
      sortArr.splice(i + 1, 1);
      i--;
    }
  }
  return sortArr
}

let r1 = avoidRepeat7(arr);
console.log(r1)