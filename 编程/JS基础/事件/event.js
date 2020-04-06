let eventUtil = {
  //添加事件侦听程序
  addHandler: function (target, type, callback) {
    if (target.addEventListener) {
      target.addEventListener(type, callback, false);
    } else if (target.attachEvent) {
      target.attachEvent('on' + type, callback);
    } else {
      target['on' + type] = callback;
    }
  },
  //移除事件侦听程序
  removeHandler: function (target, type, callback) {
    if (target.removeEventListener) {
      target.removeEventListener(type, callback, false);
    } else if (target.detachEvent) {
      target.detachEvent('on' + type, callback);
    } else {
      target['on' + type] = null;
    }
  },
  //获取事件对象
  getEvent: function (event) {
    return event ? event : window.event
  },
  //获取事件目标对象
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  //取消事件的默认行为
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault()
    } else if (event.returnValue) {
      event.returnValue = false
    }
  },
  //阻止事件捕获或者冒泡 ie只有冒泡
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation()
    } else if (event.cancelBubble) {
      event.cancelBubble = true;
    }
  },
  //获取触发 mouseover 和 mouseout 事件时的相关元素
  getRelatedTarget: function (event) {
    if (event.relatedTarget) {
      return event.relatedTarget
    } else if (event.fromElement) {
      return event.fromElement
    } else if (event.toElement) {
      return event.toElement
    } else {
      return null
    }
  },
  // 获取触发 mousedown 和 mosueup 鼠标按钮的数值 需兼容ie
  getButton: function (event) {
    if (document.implementation.hasFeature('MouseEvents', '2.0')) {
      return event.button
    } else {
      let button = event.button;
      let left = [0, 1, 3, 5, 7];
      let mid = [2, 6];
      let right = [4];
      let isLeft = left.some(ele => ele === button);
      let isMid = mid.some(ele => ele === button);
      let isRight = right.some(ele => ele === button);
      if (isLeft) {
        return 0
      } else if (isMid) {
        return 1
      } else if (isRight) {
        return 2
      }
    }
  },
  /**
   * 获取触发 mousewheel 事件的 wheelDelta 值,火狐为 detail 值 
   * 条件1：dom 向上为正(n * 120) 向下为负(n * -120)
   * 条件2：opera < 9.5 上为负(n * -120) 下位正(n * 120)
   * 条件3：火狐不支持 mousewheel，支持 DOMMouseScroll事件 向上为负(n * -3) 向下为正(n * 3)
   * 该方法统一兼容为DOM标准 上为(n * 120) 下为(n * -120)
   **/
  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      //ua的检测和获取方法
      if (client.engine.opera && client.engine.opera < 9.5) {
        return -event.wheelDelta
      } else {
        return event.wheelDelta
      }
    } else {
      return -event.detail * 40
    }
  },
  /**获取触发 keyPress 事件的 charCode */
  getCharCode: function (event) {
    if (typeof event.charCode === 'number') {
      return event.charCode
    } else {
      return event.keyCode
    }
  }
}

function throttle(func, wait) {
  let canQueue = true;
  return function (...rest) {
    if (canQueue) {
      setTimeout(() => {
        func.apply(this, rest);
        canQueue = true
      }, wait);
    }
    canQueue = false
  }
}

function throttle2(func, wait) {
  let last = 0;
  return function (...rest) {
    let now = +new Date();
    if (now - last > wait) {
      last = +new Date()
      func.apply(this, rest)
    }
  }
}

// function throttle2(func, wait) {
//   let lastDate = 0;
//   return function (...rest) {
//     let now = +new Date();
//     if (now - lastDate > wait) {
//       func.apply(this, rest)
//     }

//   }
// }