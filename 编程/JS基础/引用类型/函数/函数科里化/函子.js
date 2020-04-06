class Functor {
  constructor(val) { 
    this.val = val; 
  }

  map(f) {
    return new Functor(f(this.val));
  }
}

let a = (new Functor(2)).map(function (two) {
  return two + 2;
});

let b = (new Functor('flamethrowers')).map(function(s) {
  return s.toUpperCase();
});

console.log(b)

console.log(a)