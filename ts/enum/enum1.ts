enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up)

enum DirectionString {
    Up = "Up",
    Down = "Down"
}
console.log(DirectionString.Up);

enum BooleanLikeHererogeneousEnum {
    No = 0,
    Yes = "YES",
}
console.log(BooleanLikeHererogeneousEnum.Yes);

enum E1 {
    X, Y, Z
}

enum E2 {
    A = 1, B, C
}