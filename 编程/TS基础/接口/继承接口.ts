
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideColor: string
}

let square = <Square>{};
square.color = 'red';
square.sideColor = 'black';
square.penWidth = 55;
console.log(square);

