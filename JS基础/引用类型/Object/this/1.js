let obj = {
  name: '升高',
  age: 18,
  getName: () => {
    console.log(this.name)
  }
}

this.name = 'haha'

obj.getName();