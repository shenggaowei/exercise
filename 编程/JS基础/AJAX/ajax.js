let dataSource = {
  name: '升高',
  age: 23,
  info: {
    color: 'purple'
  },
  exer: [1, 2, 3, 4]
}

function parsedGetParams(params, parentKey = '') {
  return Object.keys(params).reduce((pre, next) => {
    prefix = pre === '' ? '' : pre + '&';
    let currentData = params[next];

    console.log(currentData)
    if (typeof currentData === 'string' || typeof currentData === 'number') {
      let key = parentKey ? `[${encodeURIComponent(parentKey)}][${encodeURIComponent(next)}]` : `${encodeURIComponent(next)}`;
      return prefix + key + '=' + currentData
    }

    console.log(currentData.constructor === Object, currentData, next)
    if (currentData.constructor === Object) {
      return pre + '&' + parsedGetParams(currentData, next);
    }

    if (currentData.constructor === Array) {

      let disguiseArray = currentData.reduce((pre, next, index) => {
        pre[index] = currentData = next;
        return pre;
      }, {})

      return pre + parsedGetParams(disguiseArray, next)
    }

  }, '')

}

console.log(parsedGetParams(dataSource));

function Ajax(params) {
  let {
    methods = 'GET', data = {}, onSuccess = () => 0, onError = () => 0, url = '', timeout, dataType
  } = params;

  if (methods === 'GET') {
    url = url + "?" + parsedGetParams(data);
    data = null;
  }

  let xhr

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = ActiveXObject('Microsoft.XMLHTTP');
  }

  let xhr = new XMLHttpRequest();

  let timer = setTimeout(function () {
    onError('超时了');
    xhr.abort();
  }, timeout || 3000)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {
        clearTimeout(timer);
        let res = dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText
        onSuccess(res);
      }
    }
  }

  xhr.open(methods, url, true);

  if (methods === 'POST') {
    //设置表单提交时的内容类型
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.send(data);
}