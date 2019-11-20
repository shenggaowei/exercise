// 母牛从3-7岁初每年会生产1头小母牛，10岁后死亡（10岁仍然存活），假设初始有1头刚出生的母牛，请问第n年有多少头母牛？（年从第一年开始计数）
// f(n) = f(n-1) + born(n-2,n-3...n-6)  - f(n-9)

function born(n) {
  const f = [0, 0, 0, 1, 1, 2, 3, 5];
  if (n <= 7) {
    return f[n];
  }
  return born(n - 2) + born(n - 3) + born(n - 4) + born(n - 5) + born(n - 6)
}


function death(n) {
  //计算死亡牛的数量 第11年为1 从第12年起 死亡牛头数 == 10年前出生牛的头数
  if (n === 11) {
    return 1;
  } else if (n <= 10) {
    return 0
  } else {
    return born(n - 10);
  }
}

function cowNum(n) {
  let f = [0, 1, 1];

  if (n <= 2) {
    return f[n];
  }

  return cowNum(n - 1) + born(n) - death(n)
}
let total = cowNum(50);
console.log(total)


const cowsNum = n => {
  let total_num = 1;
  const count = x => {
    if (x < 3) {
      return;
    }
    const children_num = x - 2 > 5 ? 5 : x - 2;
    let child_age = children_num + (x > 7 ? x - 7 : 0);//first
    total_num += children_num;
    total_num = x > 10 ? total_num - 1 : total_num;
    let index = 0;
    while (child_age > 0 && index < 5) {
      count(child_age);
      index++;
      child_age--;
    };
  }
  count(n);
  return total_num;
}

console.log(cowsNum(50))