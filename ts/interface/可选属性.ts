namespace V1 {
  export interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
      newSquare.color = config.color
    }
    if (config.width) {
      newSquare.area = config.width * config.width
    }
    return newSquare
  }

  let a = createSquare({ color: 'red', width: 100 })
  console.log(a);
}
