let a = [{
    startTime: "2019-06-04 00:00:00",
    endTime: "2019-06-06 23:59:59",
    type: 1,
    num: 1
  },
  {
    startTime: "2019-06-07 00:00:00",
    endTime: "2019-06-09 00:00:00",
    type: 1,
    num: 1
  }
];
let all = ["2019-06-04 00:00:00", "2019-06-09 00:00:00"];

function f(data, allTime) {
  //转换对比子串的数据为时间戳
  data.forEach(ele => {
    let {
      startTime,
      endTime
    } = ele;
    ele.startTime = new Date(startTime).getTime();
    ele.endTime = new Date(endTime).getTime();
  });

  //选择排序类比法判断是否有重合
  let ifRepeat = false;
  judgeRepeat: {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = i + 1; j < data.length; j++) {
        let {
          startTime,
          endTime
        } = data[i];
        let {
          startTime: compareStartTime,
          endTime: compareEndTime
        } = data[j];
        let condition1 =
          startTime >= compareStartTime &&
          endTime >= compareEndTime &&
          !(startTime > compareEndTime);
        let condition2 =
          startTime <= compareStartTime && endTime >= compareEndTime;
        let condition3 =
          startTime <= compareStartTime &&
          endTime <= compareEndTime &&
          !(endTime < compareStartTime);
        let repetition = condition1 || condition2 || condition3;
        if (repetition) {
          ifRepeat = true;
          break judgeRepeat;
        }
      }
    }
  }

  //转换池子时间为时间戳
  allTime.forEach((ele, index) => {
    all[index] = new Date(ele).getTime();
  });

  //判断全部时间是否在全局范围内
  function judgeIfEmpty([min, max]) {
    let [minTime, maxTime] = allTime;

    if (min === minTime && max === maxTime) {
      return "符合要求";
    }

    //当前最小项不是总体最小项。去找
    if (min !== minTime) {
      min -= 1000;
      let preInfo = data.find(ele => ele.endTime === min);
      if (preInfo) {
        min = preInfo.startTime;
      } else {
        return "开始不符合要求";
      }
    }

    //当前最大项不是总体最大项 去找
    if (max !== maxTime) {
      max += 1000;
      let nextInfo = data.find(ele => ele.startTime === max);
      if (nextInfo) {
        max = nextInfo.endTime;
      } else {
        return "结束不符合要求";
      }
    }

    return judgeIfEmpty([min, max]);
  }

  console.log(data[0]);

  return judgeIfEmpty([data[0].startTime, data[0].endTime]);

  return ifRepeat;
}

let result = f(a, all);
console.log(result);

// break
outer_block: {
  inner_block: {
    console.log("1");
    break outer_block;
    console.log("--");
  }

  console.log("2");
}

var startTime = "2019-06-04 00:00:00";
var endTime = "2019-06-04 00:00:01";
startTime = new Date(startTime).getTime();
endTime = new Date(endTime).getTime();
console.log(startTime, endTime);