function getKey(list) {
  let temp = JSON.parse(JSON.stringify(list));
  return temp
    .filter((ele, index) => {
      const {
        nav_sort
      } = ele;
      if (nav_sort) {
        temp.splice(index, 1);
        return ele;
      }
    })
    .concat(temp)
    .sort((a, b) => a.nav_sort - b.nav_sort);
}

let list = [{
    nav_sort: 1,
    name: "升高"
  },
  {
    nav_sort: 2,
    name: "升高2"
  },
  {
    nav_sort: 3,
    name: "升高3"
  },
  {
    name: "升高5"
  },
  {
    name: "升高4"
  }
];
let data = getKey(list);
console.log(data);

let a = [1, 2, 3].filter(ele => {});
console.log(a);