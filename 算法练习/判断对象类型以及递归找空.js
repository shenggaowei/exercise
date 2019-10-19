/**
 * 判断引用类型是对象还是数组
 * @param data
 * @returns {string}
 */
function isType(data) {
  let type = Object.prototype.toString.call(data);
  if (type === '[object Array]') {
    return 'Array';
  } else if (type === '[object Object]') {
    return 'Object';
  } else {
    return typeof data;
  }
}

/**
 *判断数据结构是否包含空、null、undefined、空数组和空对象
 * @param data
 * @returns {boolean}
 */
function hasEmpty(data) {
  let result = false;

  if (typeof data === 'string') {
    result = !data;
  }

  if (typeof data === 'number') {
    result = !data && data !== 0;
  }

  if (typeof data === 'undefined') { 
    result = true
  }

  if (isType(data) === 'Array') {
    if (data.length === 0) {
      result = true;
    }
    for (let item of data) {
      let found = hasEmpty(item);
      if (found) {
        result = true;
        break;
      }
    }
  }

  /**
   * 判断object类型
   */
  if (isType(data) === 'Object') {
    // 排除null
    if (data === null) {
      result = true;
    } else {
      //不是null遍历值
      if (Object.keys(data).length === 0) {
        result = true;
      }

      for (let keyword in data) {
        let value = data[keyword];
        let found = hasEmpty(value);
        if (found) {
          result = true;
          break;
        }
      }

    }
  }

  return result;
}

let obj = [
 {time: "1", user: "1", num: undefined},
{time: "1", user: "1", number: 1}]

console.log(hasEmpty(obj))


let a = 'aaaa';
let b = a.split(',');
console.log(b);






let dataSource = [{
  code: 1,
  name: "1",
  child: [
    {
      code: 2,
      name: '2',
      child: [
        {
          code: 3,
          name: '3'
        }
      ]
    }
  ],
},
  {
    code: 4,
    name: '4'
  }]
/**
 *格式化dataSource
 *
 * @param {*} data
 * @returns
 */
function replaceKey(data) { 
  const { dataSource, labelKey, valueKey, childrenKey } = data;
  return dataSource.map(ele => { 
    let current = {}
    current.label = ele[labelKey];
    current.value = ele[valueKey];
    if (ele[childrenKey]) { 
      let params = { dataSource: ele[childrenKey], labelKey, valueKey, childrenKey };
      current.children = replaceKey(params)
    }
    return current
  })
}

let data = replaceKey({ dataSource, labelKey: 'name', valueKey: 'code', childrenKey: 'child' });
console.log(JSON.stringify(data))