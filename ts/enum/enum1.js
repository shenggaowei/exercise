var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "Up";
    DirectionString["Down"] = "Down";
})(DirectionString || (DirectionString = {}));
console.log(DirectionString.Up);
var BooleanLikeHererogeneousEnum;
(function (BooleanLikeHererogeneousEnum) {
    BooleanLikeHererogeneousEnum[BooleanLikeHererogeneousEnum["No"] = 0] = "No";
    BooleanLikeHererogeneousEnum["Yes"] = "YES";
})(BooleanLikeHererogeneousEnum || (BooleanLikeHererogeneousEnum = {}));
console.log(BooleanLikeHererogeneousEnum.Yes);
